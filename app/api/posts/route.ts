import { createClient } from "contentful"

import { Post, Topic } from "@/types/post"

import { Author } from "./../../../types/post"

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
    })

    const isMoreToFetch =
        page * 10 + postsResponse.items.length < postsResponse.total

    const checkIfTopicInPost = (post: Post, topic: string) => {
        console.log()

        return post.topics.some((topicItem: Topic) => {
            return topicItem.fields.name.toLowerCase() === topic.toLowerCase()
        })
    }

    let posts: Post[] = []

    postsResponse.items.forEach((post) => {
        // @ts-ignore
        if (topic && checkIfTopicInPost(post.fields, topic)) {
            //@ts-ignore
            posts.push(post.fields)
        } else if (!topic) {
            // @ts-ignore
            posts.push(post.fields)
        }
    })

    return Response.json({ posts, isMoreToFetch })
}
