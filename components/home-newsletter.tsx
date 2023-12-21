import dynamic from "next/dynamic"

import Container from "@/components/ui/container"

import { Skeleton } from "./ui/skeleton"

function HomeNewsletter() {
    const NewsletterForm = dynamic(() => import("@/forms/newsletter-form"), {
        loading: () => (
            <div className="flex w-full flex-col gap-5">
                <Skeleton className="h-[50px] w-full" />
                <Skeleton className="h-[50px] w-full" />
            </div>
        ),
        ssr: false,
    })

    return (
        <section className="flex w-full justify-center">
            <Container>
                <div className="w-full space-y-5 border border-teal-400 px-10 py-8">
                    <h1 className="text-4xl font-bold italic text-green-600">
                        Sign up to my newsletter!
                    </h1>
                    <div className="flex items-center">
                        <NewsletterForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeNewsletter
