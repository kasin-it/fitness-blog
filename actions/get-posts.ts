import { createClient } from "contentful"

import { Post } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

interface GetPostsProps {
    isFeatured?: boolean
    slug?: string
    limit?: number
    query?: string
    topic?: string
    page?: number
}

export async function getPosts({
    isFeatured = false,
    slug = "",
    limit = 0,
    query = "",
    topic = "",
    page = 0,
}: GetPostsProps) {
    const postsResponse = await client.getEntries({
        content_type: "post",
        limit: limit,
        "fields.featured": isFeatured,
        "fields.slug": slug,
        "fields.topics": topic,
        query: query,
        skip: page * 10,
    })

    let posts: Post[] = []

    postsResponse.items.forEach((post) => {
        //@ts-ignore
        posts.push(post.fields)
    })

    return posts
}
