import { Post } from "@/types/post"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"

interface BlogFeaturedPostsProps {
    featuredPosts: Post[]
}

function BlogFeaturedPosts({ featuredPosts }: BlogFeaturedPostsProps) {
    return (
        <section className="flex w-full flex-col gap-10">
            <Separator />
            <h1 className="text-5xl font-bold">Top posts</h1>
            <Separator />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {featuredPosts.length > 0 && (
                    <PostCard
                        post={featuredPosts[0]}
                        key={featuredPosts[0].title}
                    />
                )}

                {featuredPosts.length > 1 && (
                    <PostCard
                        post={featuredPosts[1]}
                        key={featuredPosts[1].title}
                    />
                )}
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.length > 2 && (
                    <PostCard
                        post={featuredPosts[2]}
                        key={featuredPosts[2].title}
                    />
                )}
                {featuredPosts.length > 3 && (
                    <PostCard
                        post={featuredPosts[3]}
                        key={featuredPosts[3].title}
                    />
                )}
                {featuredPosts.length > 4 && (
                    <PostCard
                        post={featuredPosts[4]}
                        key={featuredPosts[4].title}
                    />
                )}
            </div>
        </section>
    )
}
export default BlogFeaturedPosts
