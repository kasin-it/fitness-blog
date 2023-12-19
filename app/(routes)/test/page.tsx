import { getPost } from "@/actions/get-post"

async function page() {
    const post = await getPost({ slug: "more-reps-more-sweat" })

    return <div>{JSON.stringify(post)}</div>
}
export default page
