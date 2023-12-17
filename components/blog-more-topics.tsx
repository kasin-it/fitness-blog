"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Badge } from "./ui/badge"

interface BlogMoreTopicsProps {
    topics: string[]
    counter: number
}

function BlogMoreTopics({ topics, counter }: BlogMoreTopicsProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Badge className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400">
                    (+{counter}) Show More
                </Badge>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Choose topic that is intresting you!
                    </SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                        <Badge
                            key={topic}
                            className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-400"
                        >
                            {topic}
                        </Badge>
                    ))}
                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        {/* <Button type="submit">Save changes</Button> */}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
export default BlogMoreTopics
