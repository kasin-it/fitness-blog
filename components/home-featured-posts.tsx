import { title } from "process"
import gym from "@/public/gym.webp"

import Container from "@/components/ui/container"

import PostCard from "./ui/post-card"

function HomeFeaturedPosts() {
    const POSTS = [
        {
            title: "Why health is important?",
            img: gym.src,
            slug: "dsfsdfsdfsdfsdfsd",
            topics: ["strength", "sdfsdf", "sdfsdf"],
            date: "12/04/2004",
            author: {
                name: "Marcing",
                img: gym.src,
            },
        },
        {
            title: "Why health is important?",
            img: gym.src,
            slug: "dsfsdfsdfsdfsdfsd",
            topics: ["strength", "sdfsdf", "sdfsdf"],
            date: "12/04/2004",
            author: {
                name: "Marcing",
                img: gym.src,
            },
        },
        {
            title: "Why health is important?",
            img: gym.src,
            slug: "dsfsdfsdfsdfsdfsd",
            topics: ["strength", "sdfsdf", "sdfsdf"],
            date: "12/04/2004",
            author: {
                name: "Marcing",
                img: gym.src,
            },
        },
    ]

    return (
        <section className="flex w-full justify-center px-10 pt-48 md:px-0">
            <Container>
                <div className="w-full space-y-12">
                    <h1 className="text-4xl font-bold italic text-green-600 lg:text-7xl">
                        Featured Posts
                    </h1>
                    <div className="grid w-full grid-cols-1 place-items-start gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
                        {POSTS.map((post) => (
                            <PostCard {...post} key={title} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeFeaturedPosts
