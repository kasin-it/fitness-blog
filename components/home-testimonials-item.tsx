import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface HomeTestimonialsItemProps {
    testimonial: Testimonial
}

function HomeTestimonialsItem({ testimonial }: HomeTestimonialsItemProps) {
    return (
        <Card className="overflow-hidden">
            {/* {testimonial.img} */}
            <CardHeader className="space-y-5">
                <CardTitle>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-sm text-muted-foreground">
                            {testimonial.date}
                        </p>
                        <Avatar className="h-[80px] w-[80px]">
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback>
                                {testimonial.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <p>{testimonial.name}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <span className="px-10 text-lg italic text-green-600 dark:text-white">
                    &ldquo;{testimonial.content}&bdquo;
                </span>
            </CardContent>
        </Card>
    )
}
export default HomeTestimonialsItem
