"use server"

import { NextResponse } from "next/server"
import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
})

export async function getTopics() {
    try {
        const res = await client.getEntries({
            content_type: "post",
        })

        return NextResponse.json(res)
    } catch (error) {
        console.error("[TOPICS_GET] Fetch Error:", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}
