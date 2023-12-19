import { getImageSource } from "@/lib/utils"
import Container from "@/components/ui/container"

import HomeTestimonialsItem from "./home-testimonials-item"

interface HomeTestimonialsProps {
    testimonials: Testimonial[]
}

function HomeTestimonials({ testimonials }: HomeTestimonialsProps) {
    return (
        <section className="flex w-full justify-center px-10 py-48 md:px-0">
            <Container>
                <div className="w-full space-y-12">
                    <h1 className="text-4xl font-bold italic text-green-600 lg:text-7xl">
                        Testimonials
                    </h1>
                    <div className="place-items-top grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <HomeTestimonialsItem
                                key={testimonial.content}
                                testimonial={{
                                    name: testimonial.name,
                                    date: testimonial.date,
                                    content: testimonial.content,
                                    image: getImageSource(testimonial.image),
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeTestimonials
