import { createClient } from "contentful"

import { Post } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

interface GetPostsProps {
    isFeatured?: boolean
    limit?: number
}

export async function getPosts({
    isFeatured = undefined,
    limit = 0,
}: GetPostsProps) {
    const postsResponse = await client.getEntries({
        content_type: "post",
        limit: limit,
        "fields.featured": isFeatured,
    })

    let posts: Post[] = []

    postsResponse.items.forEach((post) => {
        //@ts-ignore
        posts.push(post.fields)
    })

    return posts
}
