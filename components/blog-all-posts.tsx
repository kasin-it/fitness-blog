import gym from "@/public/gym.webp"

import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"

function BlogAllPosts() {
    return (
        <section className="flex w-full flex-col gap-10">
            <Separator />
            <h1 className="text-5xl font-bold">All posts</h1>
            <Separator />
            <div className="grid place-items-center gap-10 md:grid-cols-2">
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    img={gym.src}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    img={gym.src}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
                <PostCard
                    title={"Benchpress improvemnt!"}
                    slug={"dsfsdfsdf"}
                    date={"12/3/4"}
                    topics={["strngth", "sdfsd"]}
                    img={gym.src}
                    author={{
                        name: "marcin",
                        img: gym.src,
                    }}
                />
            </div>
        </section>
    )
}
export default BlogAllPosts
