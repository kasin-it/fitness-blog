import { title } from "process"
import gym from "@/public/gym.webp"

import {
    getAuthorProperties,
    getImageSource,
    getListOfTopics,
} from "@/lib/utils"
import Container from "@/components/ui/container"

import PostCard from "./ui/post-card"

interface HomeFeaturedPostsProps {
    featuredPosts: Post[]
}

function HomeFeaturedPosts({ featuredPosts }: HomeFeaturedPostsProps) {
    return (
        <section className="flex w-full justify-center px-10 pt-48 md:px-0">
            <Container>
                <div className="w-full space-y-12">
                    <h1 className="text-4xl font-bold italic text-green-600 lg:text-7xl">
                        Featured Posts
                    </h1>
                    <div className="grid w-full grid-cols-1 place-items-start gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
                        {featuredPosts.map((post) => (
                            <PostCard
                                key={post.title}
                                title={post.title}
                                slug={post.slug}
                                date={post.slug}
                                topics={getListOfTopics(post.topics)}
                                author={getAuthorProperties(post.author)}
                                img={getImageSource(post.image)}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeFeaturedPosts
