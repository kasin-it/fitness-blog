import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/enums/navigation"

import { Post, Topic } from "@/types/post"
import { formatDate } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Badge } from "./badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip"

interface PostCardProps {
    post: Post
}

function PostCard({ post }: PostCardProps) {
    const formattedDate = formatDate(post.date)

    return (
        <Link href={Navigation.Blog + `/${post.slug}`}>
            <Card className="overflow-hidden">
                {post.image?.fields.file.url && (
                    <div className="overflow-hidden">
                        <Image
                            src={"http:" + post.image.fields.file.url}
                            height={0}
                            width={1000}
                            style={{ height: "auto" }}
                            alt="gym"
                            className="transition duration-300 hover:scale-110"
                        />
                    </div>
                )}
                <CardHeader className="space-y-5">
                    <CardTitle>{post.title}</CardTitle>

                    <CardContent className="flex flex-wrap gap-3 px-0 pb-0">
                        {post.topics?.map((topic: Topic) => (
                            <Badge
                                key={topic.fields.name}
                                className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                            >
                                {topic.fields.name}
                            </Badge>
                        ))}
                    </CardContent>
                </CardHeader>
                <CardFooter>
                    <div className="flex w-full items-center justify-start space-x-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Avatar>
                                        <AvatarImage
                                            src={
                                                post.author?.fields.image.fields
                                                    .file.url
                                            }
                                        />
                                        <AvatarFallback>
                                            {post.author?.fields.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div>{post.author?.fields.name}</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <div className="border-l-2 pl-2 text-muted-foreground">
                            {formattedDate}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default PostCard
