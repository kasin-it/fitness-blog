import { createClient } from "contentful"

import { Post } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

interface GetPostProps {
    slug: string
}

export async function getPost({ slug }: GetPostProps) {
    const postsResponse = await client.getEntries({
        content_type: "post",
        limit: 1,
        "fields.slug": slug || "",
    })

    if (postsResponse.items.length < 1) {
        return null
    }
    return postsResponse.items[0].fields
}
