import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/enums/navigation"

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
    title: string
    img?: string
    slug: string
    date: string
    topics: string[]
    author: {
        name: string
        img: string
    }
}

function PostCard({ title, img, topics, date, slug, author }: PostCardProps) {
    return (
        <Link href={Navigation.Blog + `/${slug}`}>
            <Card className="overflow-hidden">
                {img && (
                    <div className="overflow-hidden">
                        <Image
                            src={img}
                            height={0}
                            width={600}
                            style={{ height: "auto" }}
                            alt="gym"
                            className="transition duration-300 hover:scale-110"
                        />
                    </div>
                )}
                <CardHeader className="space-y-5">
                    <CardTitle>{title}</CardTitle>

                    <CardContent className="flex flex-wrap gap-3 px-0 pb-0">
                        {topics.map((topic) => (
                            <Badge
                                key={topic}
                                className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                            >
                                {topic}
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
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>
                                            {author.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div>{author.name}</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <div className="border-l-2 pl-2 text-muted-foreground">
                            {date}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default PostCard
