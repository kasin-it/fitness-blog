import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/enums/navigation"
import imgd from "@/public/pexels-matheus-bertelli-3792581.jpg"

import Container from "@/components/ui/container"

function HomeHero() {
    return (
        <section className="flex w-full justify-center pt-10">
            <Container>
                <div className="flex flex-col items-center gap-10 lg:flex-row">
                    <div className="flex flex-col gap-10">
                        <h1 className=" text-4xl font-bold italic text-green-600 sm:text-5xl xl:text-7xl">
                            Hi im [your name],
                            <br /> im a fitness coach
                        </h1>

                        <Link
                            className="rounded-md bg-green-600 px-12 py-2 text-center text-2xl font-bold uppercase italic text-white"
                            href={Navigation.Contact}
                        >
                            Get Started
                        </Link>
                    </div>
                    <Image
                        src={imgd}
                        height={700}
                        width={0}
                        style={{ width: "auto" }}
                        alt="hero image"
                        loading="eager"
                        priority={true}
                    />
                </div>
            </Container>
        </section>
    )
}

export default HomeHero
