"use client"

import { useCallback, useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

import { Post } from "@/types/post"

import PostCard from "./ui/post-card"
import { Skeleton } from "./ui/skeleton"

function BlogAllPostsfetchMore() {
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(1)
    const [fetchMore, setFetchMore] = useState(false)

    const renderPostsSkeletons = () => {
        return Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-[400px] w-full sm:h-[500px]" />
        ))
    }

    const fetchMoreData = useCallback(async () => {
        try {
            const params = new URLSearchParams()

            params.append("page", page.toString())

            const res = await axios.get("/api/posts", { params })

            const { posts, isMoreToFetch } = res.data
            setPosts((prevPosts) => [...prevPosts, ...posts])
            setFetchMore(isMoreToFetch)
        } catch (error) {
            console.error("[BLOG] Error fetching more data:", error)
        }
    }, [page])

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={() => fetchMoreData().then(() => setPage((prev) => prev + 1))}
            hasMore={fetchMore}
            className="grid place-items-center gap-10 md:grid-cols-2"
            loader={renderPostsSkeletons()}
        >
            {posts.map((post: Post) => (
                <PostCard post={post} key={post.title} />
            ))}
        </InfiniteScroll>
    )
}
export default BlogAllPostsfetchMore
