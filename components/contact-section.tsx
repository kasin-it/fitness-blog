import Image from "next/image"
import ContactForm from "@/forms/contact-form"
import hero_image from "@/public/hero-image.webp"

import Container from "@/components/ui/container"

function ContactSection() {
    return (
        <section className="flex w-full justify-center px-10 md:px-0">
            <Container>
                <div className="w-full space-y-12 border border-teal-400 px-10 py-8">
                    <h1 className="text-4xl font-bold italic text-green-600">
                        Contact Me
                    </h1>
                    <div className="flex items-center">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default ContactSection
