import Container from "@/components/ui/container"
import BlogAllPosts from "@/components/blog-all-posts"
import BlogFeaturedPosts from "@/components/blog-featured-posts"
import BlogSearch from "@/components/blog-search"

function BlogPage() {
    return (
        <main className="flex w-full justify-center">
            <Container>
                <BlogSearch />
                <BlogFeaturedPosts />
                <BlogAllPosts />
            </Container>
        </main>
    )
}
export default BlogPage
