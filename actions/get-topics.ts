import { createClient } from "contentful"

import { Topic } from "@/types/topic"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function getTopics() {
    const topicsResponse = await client.getEntries({
        content_type: "topic",
    })

    const topics: Topic[] = []

    topicsResponse.items.forEach((topic) => {
        //@ts-ignore
        topics.push(topic)
    })

    return topics
}
