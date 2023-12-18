"use server"

import { NextResponse } from "next/server"
import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

interface GetPostParams {
    slug: string
}

export async function getPost({ slug }: GetPostParams) {
    try {
        const res = await client.getEntries({
            content_type: "post",
            limit: 1,
            "fields.slug": slug,
        })

        return NextResponse.json(res)
    } catch (error) {
        console.error("[POST_GET] Fetch Error:", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

interface GetPostsParams {
    query?: string
    topics?: string[]
    page?: number
    featured?: boolean
}

export async function getPosts({ query, topics, page = 0 }: GetPostsParams) {
    try {
        const res = await client.getEntries({
            content_type: "post",
            limit: 10,
            query: query ?? "",
            skip: page * 10 ?? 0,
            "fields.topics": topics ?? "",
        })

        return NextResponse.json(res)
    } catch (error) {
        console.error("[POSTS_GET] Fetch Error:", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}
