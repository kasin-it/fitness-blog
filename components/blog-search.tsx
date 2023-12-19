"use client"

import { useCallback, useEffect, useState } from "react"
import gym from "@/public/gym.webp"
import axios from "axios"
import _ from "lodash"
import { Search } from "lucide-react"

import { Post } from "@/types/post"
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
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [topicFilter, setTopicFilter] = useState<Topic | undefined>()
    const [fetchMore, setFetchMore] = useState(true)
    const [page, setPage] = useState(0)

    const toggleSearchHiddenClick = () => {
        setIsSearchHidden((prev) => !prev)
        setQuery("")
        setPosts([])
        setTopicFilter(undefined)
    }

    const renderPostsSkeletons = () => {
        return Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-[400px] w-full sm:h-[500px]" />
        ))
    }

    const handleFetchMore = () => {
        setPage((prev) => prev + 1)
        setIsLoadingMore(true)
    }

    const handleTopicClick = (topic: Topic) => {
        if (topicFilter?.name == topic.name) {
            setTopicFilter(undefined)
        } else {
            setTopicFilter(topic)
        }
    }

    const handleQueryChange = (value: string) => {
        setQuery(value)
    }

    useEffect(() => {
        const fetchMoreData = async () => {
            console.log(page)
            try {
                const params = new URLSearchParams()

                if (query) {
                    params.append("query", query)
                }

                if (topicFilter && topicFilter.name) {
                    params.append("topic", topicFilter.name)
                }

                params.append("page", page.toString())

                const res = await axios.get("/api/posts", { params })

                const { posts, isMoreToFetch } = res.data
                setPosts((prevPosts) => [...prevPosts, ...posts])
                setFetchMore(isMoreToFetch)
            } catch (error) {
                console.error("[BLOG] Error fetching data:", error)
            } finally {
                setIsLoadingMore(false)
            }
        }

        fetchMoreData()
    }, [page])

    useEffect(() => {
        const fetchData = async () => {
            console.log(page)
            try {
                const params = new URLSearchParams()

                if (query) {
                    params.append("query", query)
                }

                if (topicFilter && topicFilter.name) {
                    params.append("topic", topicFilter.name)
                }

                params.append("page", page.toString())

                const res = await axios.get("/api/posts", { params })

                const { posts, isMoreToFetch } = res.data
                setPosts(posts)
                setFetchMore(isMoreToFetch)
            } catch (error) {
                console.error("[BLOG] Error fetching data:", error)
            } finally {
                setIsLoading(false)
            }
        }

        const debouncedFetch = _.debounce(() => {
            console.log("fetch")
            fetchData()
        }, 1000)
        debouncedFetch()

        if (query !== "" || topicFilter) {
            setIsSearchResultsHidden(false)
        } else {
            setIsSearchResultsHidden(true)
        }

        setIsLoading(true)

        return () => {
            debouncedFetch.cancel()
        }
    }, [query, topicFilter])

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
                            {topics.map((topic: Topic) => (
                                <Badge
                                    key={topic.name}
                                    className={cn(
                                        "cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400",
                                        topicFilter?.name == topic.name
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
                                        {posts &&
                                            posts.map((post) => (
                                                <PostCard
                                                    key={post.title}
                                                    post={post}
                                                />
                                            ))}
                                        {posts.length === 0 && (
                                            <p className="font-bold">
                                                We didnt found what you were
                                                looking for...
                                            </p>
                                        )}
                                    </>
                                )}
                                {isLoadingMore && renderPostsSkeletons()}
                            </div>
                            {fetchMore && (
                                <Button onClick={handleFetchMore}>
                                    See More
                                </Button>
                            )}
                        </>
                    )}
                </>
            )}
        </section>
    )
}
export default BlogSearch
