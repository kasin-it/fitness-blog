import dynamic from "next/dynamic"

import { Author } from "@/types/post"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"

const SocialMediaProvidersShare = dynamic(
    () => import("@/components/ui/social-media-providers-share"),
    {
        loading: () => (
            <div className="flex gap-2">
                <Skeleton className="rounded-full">
                    <div className="h-8 w-8 rounded-full" />
                </Skeleton>
                <Skeleton className="rounded-full">
                    <div className="h-8 w-8 rounded-full" />
                </Skeleton>
                <Skeleton className="rounded-full">
                    <div className="h-8 w-8 rounded-full" />
                </Skeleton>
            </div>
        ),
        ssr: false,
    }
)

interface BlogAuthorInformationProps {
    author: Author
}

function BlogAuthorInformation({ author }: BlogAuthorInformationProps) {
    return (
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-gray-100 px-7 py-6 sm:flex-row">
            <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={author.fields.image.fields.file.url} />
                    <AvatarFallback>{author?.fields.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm text-muted-foreground">Posted by:</p>
                    <h1 className="text-xl font-semibold text-black dark:text-primary-foreground">
                        {author.fields.name}
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
                <p className="w-full border-b border-muted-foreground py-1 text-center text-lg text-muted-foreground sm:w-auto sm:border-b-0 sm:border-r sm:pr-2 sm:text-left">
                    Share
                </p>

                <SocialMediaProvidersShare className="flex gap-2" />
            </div>
        </div>
    )
}
export default BlogAuthorInformation
