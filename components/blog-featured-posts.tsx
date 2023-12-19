import {
    getAuthorProperties,
    getImageSource,
    getListOfTopics,
} from "@/lib/utils"

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
                        title={featuredPosts[0].title}
                        slug={featuredPosts[0].slug}
                        date={featuredPosts[0].date}
                        topics={getListOfTopics(featuredPosts[0].topics)}
                        img={getImageSource(featuredPosts[0].image)}
                        author={getAuthorProperties(featuredPosts[0].author)}
                    />
                )}

                {featuredPosts.length > 1 && (
                    <PostCard
                        title={featuredPosts[1].title}
                        slug={featuredPosts[1].slug}
                        date={featuredPosts[1].date}
                        topics={getListOfTopics(featuredPosts[1].topics)}
                        img={getImageSource(featuredPosts[1].image)}
                        author={getAuthorProperties(featuredPosts[1].author)}
                    />
                )}
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.length > 2 && (
                    <PostCard
                        title={featuredPosts[2].title}
                        slug={featuredPosts[2].slug}
                        date={featuredPosts[2].date}
                        topics={getListOfTopics(featuredPosts[2].topics)}
                        author={getAuthorProperties(featuredPosts[2].author)}
                    />
                )}
                {featuredPosts.length > 3 && (
                    <PostCard
                        title={featuredPosts[3].title}
                        slug={featuredPosts[3].slug}
                        date={featuredPosts[3].date}
                        topics={getListOfTopics(featuredPosts[3].topics)}
                        author={getAuthorProperties(featuredPosts[3].author)}
                    />
                )}
                {featuredPosts.length > 4 && (
                    <PostCard
                        title={featuredPosts[4].title}
                        slug={featuredPosts[4].slug}
                        date={featuredPosts[4].date}
                        topics={getListOfTopics(featuredPosts[4].topics)}
                        author={getAuthorProperties(featuredPosts[4].author)}
                    />
                )}
            </div>
        </section>
    )
}
export default BlogFeaturedPosts
