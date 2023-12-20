import dynamic from "next/dynamic"
import { getPosts } from "@/actions/get-posts"
import { getTopics } from "@/actions/get-topics"

import Container from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import BlogAllPosts from "@/components/blog-all-posts"
import BlogFeaturedPosts from "@/components/blog-featured-posts"

const BlogSearch = dynamic(() => import("@/components/blog-search"), {
    loading: () => (
        <section className="pt flex w-full flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-5 xl:justify-between">
                <Skeleton className="h-[40px] w-full" />
                <div className="flex w-full flex-col items-center justify-center gap-5">
                    <p className="text-md w-full text-left font-bold">
                        Topics:
                    </p>
                    <div className="justify-left flex w-full flex-wrap gap-2 px-2">
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <Skeleton className="h-[30px] w-[73px]" key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ),
    ssr: false,
})

async function BlogPage() {
    const topics = await getTopics()
    const featuredPosts = await getPosts({ limit: 5, isFeatured: true })
    const allPosts = await getPosts({ limit: 10 })

    return (
        <main className="flex w-full justify-center">
            <Container className="space-y-10">
                <h1 className="text-4xl font-bold">Blog</h1>
                <Separator />
                <BlogSearch topics={topics} />
                <BlogFeaturedPosts featuredPosts={featuredPosts} />
                <BlogAllPosts allPosts={allPosts} />
            </Container>
        </main>
    )
}
export default BlogPage
