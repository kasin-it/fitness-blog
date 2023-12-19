import { getPosts } from "@/actions/get-posts"
import { createClient } from "contentful"

import { Post } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query") || ""
    const topic = searchParams.get("topic") || ""
    const page = parseInt(searchParams.get("page") || "0") || 0

    const posts = await getPosts({ query: query, topic: topic, page: page })

    console.log(posts)

    return Response.json({ posts })
}
