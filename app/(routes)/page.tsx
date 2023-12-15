import ContactSection from "@/components/contact-section"
import HomeAbout from "@/components/home-about"
import HomeHero from "@/components/home-hero"
import HomeNewsletter from "@/components/home-newsletter"
import HomeTestimonials from "@/components/home-testimonials"

export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeAbout />
            <HomeTestimonials />
            <ContactSection />
            <HomeNewsletter />
        </main>
    )
}
