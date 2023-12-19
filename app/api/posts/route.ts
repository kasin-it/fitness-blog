import { createClient } from "contentful"

import { Post } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")
    const topics = searchParams.get("topics")
    const page = searchParams.get("page")

    const postsResponse = await client.getEntries({
        content_type: "post",
    })

    let posts: Post[] = []

    postsResponse.items.forEach((post) => {
        posts.push(post)
    })

    return Response.json({ posts })
}
