"use client"

import { useEffect, useState } from "react"
import gym from "@/public/gym.webp"
import _ from "lodash"
import { Search } from "lucide-react"

import { Topic } from "@/types/topic"
import { cn } from "@/lib/utils"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import PostCard from "./ui/post-card"
import { Separator } from "./ui/separator"
import { Skeleton } from "./ui/skeleton"

interface BlogSearchProps {
    topics: Topic[]
}

function BlogSearch({ topics }: BlogSearchProps) {
    const [query, setQuery] = useState("")
    const [isSearchResultsHidden, setIsSearchResultsHidden] = useState(true)
    const [isSearchHidden, setIsSearchHidden] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [topicsFilter, setTopicsFilter] = useState<Topic[]>([])

    const toggleSearchHiddenClick = () => {
        setIsSearchHidden((prev) => !prev)
        setQuery("")
        setPosts([])
    }

    const renderPostsSkeletons = () => {
        return Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-[400px] w-full sm:h-[500px]" />
        ))
    }

    const handleTopicClick = (topic: Topic) => {
        if (topicsFilter.includes(topic)) {
            setTopicsFilter((prevTopicsFilter) =>
                prevTopicsFilter.filter((el) => el.name !== topic.name)
            )
        } else {
            setTopicsFilter((prevTopicsFilter) => [...prevTopicsFilter, topic])
        }
    }

    const handleQueryChange = (value: string) => {
        setQuery(value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // getPosts()
            } catch (error) {
                console.error("[BLOG] Error fetching data:", error)
            } finally {
                setIsLoading(false)
            }
        }

        if (query != "" || topicsFilter.length > 0) {
            setIsSearchResultsHidden(false)
        } else {
            setIsSearchResultsHidden(true)
        }
        setIsLoading(true)

        const debouncedFetch = _.debounce(() => {
            fetchData()
        }, 1000)
        debouncedFetch()

        return () => {
            debouncedFetch.cancel()
        }
    }, [query, topicsFilter])

    return (
        <section className="pt flex w-full flex-col gap-10">
            <div className="flex w-full justify-end">
                <Button onClick={toggleSearchHiddenClick}>
                    <Search />
                </Button>
            </div>
            {isSearchHidden ? null : (
                <>
                    <div className="flex flex-col items-center justify-center gap-5 xl:justify-between">
                        <Input
                            className="w-full max-w-lg"
                            placeholder="Search..."
                            type="search"
                            id="search"
                            onChange={(e) => handleQueryChange(e.target.value)}
                        />
                        <p className="text-md font-bold">Topics:</p>
                        <div className="flex max-w-xl flex-wrap justify-center gap-2 px-2">
                            {topics.map((topic) => (
                                <Badge
                                    key={topic.name}
                                    className={cn(
                                        "cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400",
                                        topicsFilter.includes(topic)
                                            ? "opacity-50"
                                            : null
                                    )}
                                    onClick={() => handleTopicClick(topic)}
                                >
                                    {topic.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    {!isSearchResultsHidden && (
                        <>
                            <Separator />
                            <h1 className="text-5xl font-bold">Search</h1>
                            <Separator />
                            <div className="grid place-items-center gap-10 md:grid-cols-2">
                                {isLoading ? (
                                    renderPostsSkeletons()
                                ) : (
                                    <>
                                        <PostCard
                                            title={"Benchpress improvemnt!"}
                                            slug={"dsfsdfsdf"}
                                            date={"12/3/4"}
                                            topics={["strngth", "sdfsd"]}
                                            img={gym.src}
                                            author={{
                                                name: "marcin",
                                                image: gym.src,
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
                                                image: gym.src,
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
                                                image: gym.src,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    )
}
export default BlogSearch
