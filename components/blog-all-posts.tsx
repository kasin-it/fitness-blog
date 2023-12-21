import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

import { Post } from "@/types/post"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"
import { Skeleton } from "./ui/skeleton"

const BlogAllPostsFetchMore = dynamic(
    () => import("@/components/blog-all-posts-fetch-more"),
    {
        loading: () => (
            <Loader2 className="mt-10 h-10 w-10 animate-spin justify-self-center text-muted-foreground" />
        ),
        ssr: false,
    }
)
interface BlogAllPostsProps {
    allPosts: Post[]
}

function BlogAllPosts({ allPosts }: BlogAllPostsProps) {
    return (
        <section className="flex w-full flex-col items-center gap-10">
            <Separator />
            <h1 className="text-5xl font-bold">All posts</h1>
            <Separator />
            <div className="grid place-items-center gap-10 md:grid-cols-2">
                {allPosts.map((post) => (
                    <PostCard post={post} key={post.title} />
                ))}
            </div>

            <BlogAllPostsFetchMore />
        </section>
    )
}
export default BlogAllPosts
