import Link from "next/link"
import { SOCIAL_MEDIA_PROVIDERS_ICONS } from "@/constants/social-media-providers"
import { Mail } from "lucide-react"

import Container from "@/components/ui/container"
import ContactSection from "@/components/contact-section"

function ContactPage() {
    return (
        <section className="flex w-full justify-center">
            <Container>
                <section className="flex w-full flex-col justify-center gap-5 py-10 md:flex-row md:gap-0">
                    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4">
                        <p className="text-center text-3xl">
                            Email me, or fill the form.
                        </p>
                        <div className="flex w-full items-center justify-center text-2xl text-green-500 sm:w-auto">
                            <Mail />
                            <p>[your email]</p>
                        </div>
                        <div className="mt-10 inline-flex gap-x-5 text-2xl">
                            {SOCIAL_MEDIA_PROVIDERS_ICONS.map((provider) => (
                                <Link
                                    key={provider.provider}
                                    href={provider.href}
                                    aria-label={provider.provider}
                                >
                                    {provider.src}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <ContactSection />
                </section>
            </Container>
        </section>
    )
}
export default ContactPage
