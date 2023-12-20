import { getPosts } from "@/actions/get-posts"
import { getTestimonials } from "@/actions/get-testimonials"

import ContactSection from "@/components/contact-section"
import HomeAbout from "@/components/home-about"
import HomeFeaturedPosts from "@/components/home-featured-posts"
import HomeHero from "@/components/home-hero"
import HomeNewsletter from "@/components/home-newsletter"
import HomeTestimonials from "@/components/home-testimonials"

export default async function Home() {
    const featuredPosts = await getPosts({ limit: 3, isFeatured: true })
    const testimonials = await getTestimonials({ limit: 3 })

    return (
        <main className="flex flex-col gap-12 lg:gap-48">
            <HomeHero />
            <HomeAbout />
            <HomeFeaturedPosts featuredPosts={featuredPosts} />
            <HomeNewsletter />
            <HomeTestimonials testimonials={testimonials} />
            <ContactSection />
        </main>
    )
}
