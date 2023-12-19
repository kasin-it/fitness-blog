import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPost } from "@/actions/get-post"
import { getPosts } from "@/actions/get-posts"
import { Navigation } from "@/enums/navigation"
import { ArrowLeft } from "lucide-react"

import { Post, Topic } from "@/types/post"
import { Badge } from "@/components/ui/badge"
import Container from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import PostRichText from "@/components/post-rich-text"

export const revalidate = 86400

export async function generateStaticParams() {
    const posts = await getPosts({})

    return posts.map((post: Post) => ({
        slug: post.slug,
    }))
}

async function SinglePostPage({ params }: { params: { slug: string } }) {
    const post = (await getPost({ slug: params.slug })) as Post | null

    if (!post) {
        return notFound()
    }

    return (
        <section className="flex w-full justify-center">
            <Container className="flex flex-col items-start gap-5">
                <Link
                    href={Navigation.Blog}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft />
                    <p>Back to blog</p>
                </Link>
                <h1 className="text-7xl font-bold">{post.title}</h1>
                <Separator />
                {post.topics?.map((topic: Topic) => (
                    <Badge
                        key={topic.fields.name}
                        className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                    >
                        {topic.fields.name}
                    </Badge>
                ))}
                <Separator />
                <Image
                    src={"http:" + post.image.fields.file.url}
                    width={1165}
                    height={0}
                    style={{ height: "auto" }}
                    alt={post.title}
                />
                <PostRichText document={post.content} />
            </Container>
        </section>
    )
}
export default SinglePostPage
