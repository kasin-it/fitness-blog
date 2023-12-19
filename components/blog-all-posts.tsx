import dynamic from "next/dynamic"

import { Post } from "@/types/post"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"

const BlogAllPostsFetchMore = dynamic(
    () => import("@/components/blog-all-posts-fetch-more"),
    {
        // loading: () => (
        //     <Skeleton className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400">
        //         Show More
        //     </Skeleton>
        // ),
    }
)
interface BlogAllPostsProps {
    allPosts: Post[]
}

function BlogAllPosts({ allPosts }: BlogAllPostsProps) {
    return (
        <section className="flex w-full flex-col gap-10">
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
