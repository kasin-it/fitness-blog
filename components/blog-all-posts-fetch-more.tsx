"use client"

import { useCallback, useState } from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"
import InfiniteScroll from "react-infinite-scroll-component"

import { Post } from "@/types/post"

import PostCard from "./ui/post-card"

function BlogAllPostsfetchMore() {
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(1)
    const [fetchMore, setFetchMore] = useState(true)

    const fetchMoreData = useCallback(async () => {
        try {
            const params = new URLSearchParams()
            params.append("page", page.toString())

            const res = await axios.get("/api/posts", { params })

            const { posts, isMoreToFetch } = res.data
            setPosts((prevPosts) => [...prevPosts, ...posts])
            setFetchMore(isMoreToFetch)
            setPage((prev) => prev + 1)
        } catch (error) {
            console.error("[BLOG] Error fetching more data:", error)
        }
    }, [page])

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={() => fetchMoreData()}
            hasMore={fetchMore}
            className="grid place-items-center gap-10 md:grid-cols-2"
            loader={
                <Loader2 className="mt-10 h-10 w-10 animate-spin justify-self-center text-muted-foreground" />
            }
        >
            {posts.map((post: Post) => (
                <PostCard post={post} key={post.title} />
            ))}
        </InfiniteScroll>
    )
}
export default BlogAllPostsfetchMore
