import { createClient } from "contentful"

import { Testimonial } from "@/types/testimonial"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

interface GetTestimonialsProps {
    limit?: number
}

export async function getTestimonials({ limit }: GetTestimonialsProps) {
    const testimonialsResponse = await client.getEntries({
        content_type: "testimonial",
        limit: limit,
    })

    let testimonials: Testimonial[] = []

    testimonialsResponse.items.forEach((testimonial) => {
        // @ts-ignore
        testimonials.push(testimonial.fields)
    })

    return testimonials
}
