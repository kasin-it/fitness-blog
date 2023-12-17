import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/enums/navigation"

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip"
import Topics from "./topics"

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
                    <CardDescription className="flex flex-wrap gap-3">
                        <Topics items={topics} />
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className="flex items-center space-x-2">
                        <p className="border-r-2 py-2 pr-2">
                            <span className="text-muted-foreground">
                                {date}
                            </span>
                        </p>
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
                                    <p>{author.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default PostCard
