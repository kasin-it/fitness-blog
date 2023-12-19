import { createClient } from "contentful"

import { Post } from "@/types/post"
import { Testimonial } from "@/types/testimonial"
import ContactSection from "@/components/contact-section"
import HomeAbout from "@/components/home-about"
import HomeFeaturedPosts from "@/components/home-featured-posts"
import HomeHero from "@/components/home-hero"
import HomeNewsletter from "@/components/home-newsletter"
import HomeTestimonials from "@/components/home-testimonials"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export default async function Home() {
    // FETCH FEATURED POSTS

    const featuredPostsResponse = await client.getEntries({
        content_type: "post",
        limit: 3,
        "fields.featured": true,
    })

    let featuredPosts: Post[] = []

    featuredPostsResponse.items.forEach((post) => {
        // @ts-ignore
        featuredPosts.push(post.fields)
    })

    // FETCH TESTIMONIALS

    const testimonialsResponse = await client.getEntries({
        content_type: "testimonial",
        limit: 3,
    })

    let testimonials: Testimonial[] = []

    testimonialsResponse.items.forEach((testimonial) => {
        // @ts-ignore
        testimonials.push(testimonial.fields)
    })

    return (
        <main>
            <HomeHero />
            <HomeAbout />
            <HomeFeaturedPosts featuredPosts={featuredPosts} />
            <HomeTestimonials testimonials={testimonials} />
            <ContactSection />
            <HomeNewsletter />
        </main>
    )
}
