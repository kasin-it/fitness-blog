import Image from "next/image"
import Link from "next/link"
import hero_image from "@/public/hero-image.webp"

import Container from "@/components/ui/container"

function HomeHero() {
    return (
        <section className="flex w-full justify-center pt-24">
            <Container>
                <div className="relative">
                    <h1 className="text-3xl font-extrabold italic text-green-600 sm:text-6xl lg:text-8xl">
                        Transform Your Body, <br /> Transform <br /> Your Life
                    </h1>
                    <Image
                        src={hero_image}
                        width={hero_image.width}
                        height={hero_image.height}
                        alt="deadlift image"
                        loading="eager"
                        priority={true}
                        className="absolute -right-6 top-7 w-[250px] sm:-right-7 sm:top-8 sm:w-auto md:top-10 lg:right-10 lg:top-16"
                    />
                </div>
                <p className="max-w-[360px] px-10 pt-24 text-center font-medium text-muted-foreground sm:max-w-[660px] sm:pt-64 sm:text-xl lg:pt-52">
                    Hi, Im Kacper, your personal fitness coach. Join me on a
                    journey to achieve your fitness goals and discover a
                    healthier, happier version of yourself.
                </p>
                <Link
                    className="mt-5 rounded-md bg-green-600 px-12 py-2 font-bold uppercase italic text-white"
                    href="#"
                >
                    Get Started
                </Link>
            </Container>
        </section>
    )
}

export default HomeHero
