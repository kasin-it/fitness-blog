import { Suspense } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import BlogMoreTopics from "@/components/blog-more-topics"

function BlogPage() {
    return (
        <main className="flex w-full justify-center">
            <Container>
                <section className="container mx-auto px-4 py-10 md:px-6">
                    <h2 className="mb-4 text-2xl font-bold">Search Topics</h2>
                    <div className="space-x-2">
                        <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Education
                        </Badge>
                        <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Environment
                        </Badge>
                        <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Politics
                        </Badge>
                        <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Sports
                        </Badge>
                        <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Travel
                        </Badge>
                    </div>
                    <Suspense
                        fallback={<Skeleton className="h-[30px] w-[100px]" />}
                    >
                        <MoreTopics />
                    </Suspense>

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            className="flex-grow"
                            placeholder="Search..."
                            type="search"
                        />
                        <Button
                            className="bg-blue-500 hover:bg-blue-700"
                            variant="default"
                        >
                            Go
                        </Button>
                    </div>
                </section>
            </Container>
        </main>
    )
}
export default BlogPage
