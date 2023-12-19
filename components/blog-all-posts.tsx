import { Post } from "@/types/post"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"

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
                    <PostCard post={post} />
                ))}

                {/* <BlogAllPostsFetchMore /> */}
            </div>
        </section>
    )
}
export default BlogAllPosts
