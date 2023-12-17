import ContactSection from "@/components/contact-section"
import HomeAbout from "@/components/home-about"
import HomeFeaturedPosts from "@/components/home-featured-posts"
import HomeHero from "@/components/home-hero"
import HomeNewsletter from "@/components/home-newsletter"
import HomeTestimonials from "@/components/home-testimonials"

export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeAbout />
            <HomeFeaturedPosts />
            <HomeTestimonials />
            <ContactSection />
            <HomeNewsletter />
        </main>
    )
}
