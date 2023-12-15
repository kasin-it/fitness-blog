import NewsletterForm from "@/forms/newsletter-form"

import Container from "@/components/ui/container"

function HomeNewsletter() {
    return (
        <section className="flex w-full justify-center px-10 pt-10 md:px-0">
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
