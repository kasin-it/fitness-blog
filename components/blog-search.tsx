import dynamic from "next/dynamic"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Skeleton } from "./ui/skeleton"
import Topics from "./ui/topics"

const MAX_TOPICS = 6

const TOPICS = [
    "strfength",
    "strfeng4h",
    "strerength",
    "strefn5gth",
    "sttrfength",
    "strfentgth",
    "sttrength",
    "strefngtth",
]

const BlogMoreTopics = dynamic(() => import("@/components/blog-more-topics"), {
    loading: () => (
        <Skeleton className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400">
            Show More
        </Skeleton>
    ),
})

function BlogSearch() {
    const limitedTopics = TOPICS.slice(0, MAX_TOPICS)

    return (
        <section className="flex w-full flex-col gap-2 py-10">
            <h2 className="mb-4 text-2xl font-bold">Search Topics</h2>
            <div className="flex justify-between">
                <div className="flex flex-wrap gap-2">
                    <Topics items={limitedTopics} />
                    <BlogMoreTopics
                        topics={TOPICS}
                        counter={TOPICS.length - limitedTopics.length}
                    />
                </div>

                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        className="flex-grow"
                        placeholder="Search..."
                        type="search"
                    />
                    <Button variant="default">Search</Button>
                </div>
            </div>
        </section>
    )
}
export default BlogSearch
