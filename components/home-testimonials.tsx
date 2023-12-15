import Container from "@/components/ui/container"

import HomeTestimonialsReview from "./home-testimonials-review"

function HomeTestimonials() {
    const REVIEWS = [
        {
            name: "Emma",
            content: "very good trainer!",
            img: <div className="h-[100px] w-[100px] bg-blue-500"></div>,
            date: "12/04/2023",
        },
        {
            name: "Emma",
            content:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum impedit, voluptatibus veniam eum distinctio totam laborum quod quos itaque tenetur architecto natus doloribus beatae consequuntur obcaecati deserunt inventore illum. Ducimus.",
            img: <div className="h-[100px] w-[100px] bg-blue-500"></div>,
            date: "12/04/2023",
        },
        {
            name: "Emma",
            content: "very good trainer!",
            img: <div className="h-[100px] w-[100px] bg-blue-500"></div>,
            date: "12/04/2023",
        },
    ]

    return (
        <section className="flex w-full justify-center px-10 py-48 md:px-0">
            <Container>
                <div className="w-full space-y-12">
                    <h1 className="text-4xl font-bold italic text-green-600 lg:text-7xl">
                        Testimonials
                    </h1>
                    <div className="grid w-full grid-cols-1 place-items-center gap-4 lg:grid-cols-3">
                        {REVIEWS.map((review) => (
                            <HomeTestimonialsReview
                                name={review.name}
                                content={review.content}
                                img={review.img}
                                date={review.date}
                                key={review.name}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeTestimonials
