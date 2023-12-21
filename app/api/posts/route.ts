import { createClient } from "contentful"

import { Post, Topic } from "@/types/post"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query") || ""
    const topic = searchParams.get("topic") || ""
    const page = parseInt(searchParams.get("page") || "0") || 0

    const postsResponse = await client.getEntries({
        content_type: "post",
        skip: page * 10,
        query: query,
        limit: 10,
    })

    const isMoreToFetch =
        page * 10 + postsResponse.items.length < postsResponse.total

    const checkIfTopicInPost = (post: Post, topic: string) => {
        return post.topics.some((topicItem: Topic) => {
            return topicItem.fields.name.toLowerCase() === topic.toLowerCase()
        })
    }

    let posts: Post[] = []
    if (topic.length > 0) {
        postsResponse.items.forEach((post) => {
            // @ts-ignore
            if (checkIfTopicInPost(post.fields, topic)) {
                //@ts-ignore
                posts.push(post.fields)
            }
        })
    } else {
        postsResponse.items.forEach((post) => {
            //@ts-ignore
            posts.push(post.fields)
        })
    }

    return Response.json({ posts, isMoreToFetch })
}
