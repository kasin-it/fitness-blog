import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface HomeTestimonialsReviewProps {
    name: string
    content: string
    img: string
    date: string
}

function HomeTestimonialsReview({
    name,
    content,
    img,
    date,
}: HomeTestimonialsReviewProps) {
    return (
        <Card className="overflow-hidden">
            {img && <div className="overflow-hidden"></div>}
            <CardHeader className="space-y-5">
                <CardTitle>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-sm text-muted-foreground">{date}</p>
                        <Avatar className="h-[80px] w-[80px]">
                            <AvatarImage src={img} />
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        <p>{name}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <span className="px-10 text-lg italic text-green-600 dark:text-white">
                    &ldquo;{content}&bdquo;
                </span>
            </CardContent>
        </Card>
    )
}
export default HomeTestimonialsReview
