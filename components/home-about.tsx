import Image from "next/image"
import Link from "next/link"
import { SOCIAL_MEDIA_PROVIDERS_ICONS } from "@/constants/social-media-providers"
import hero_image from "@/public/hero-image.webp"

import Container from "@/components/ui/container"

function HomeAbout() {
    return (
        <section className="flex w-full justify-center px-10 pt-48 md:px-0">
            <Container>
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold italic text-green-600 lg:text-7xl">
                        About Me
                    </h1>
                    <div className="flex items-center justify-between">
                        <Image
                            src={hero_image}
                            width={hero_image.width}
                            height={hero_image.height}
                            alt="Author photo"
                            className=" hidden pr-12 md:block"
                        />
                        <article className="max-w-[700px] space-y-5">
                            <h2 className="text-2xl font-bold">
                                Meet [Your Name], Your Dedicated Fitness Partner
                            </h2>
                            <p className="text-muted-foreground">
                                Hi, Im [Your Name], a passionate and certified
                                personal trainer with a mission to help you
                                achieve your fitness goals and lead a healthier
                                lifestyle. With years of experience in fitness
                                training, I am dedicated to providing
                                personalized workout plans and guidance tailored
                                to your unique needs and preferences. My
                                approach combines expertise in various fitness
                                disciplines, a focus on proper nutrition, and a
                                commitment to your overall well-being. Lets
                                embark on a fitness journey together and turn
                                your aspirations into achievements.
                            </p>
                            <div className="inline-flex gap-x-5 text-2xl">
                                {SOCIAL_MEDIA_PROVIDERS_ICONS.map(
                                    (provider) => (
                                        <Link
                                            key={provider.provider}
                                            href={provider.href}
                                        >
                                            {provider.src}
                                        </Link>
                                    )
                                )}
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeAbout
