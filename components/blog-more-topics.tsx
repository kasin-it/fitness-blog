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
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>

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
