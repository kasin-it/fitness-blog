"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

function BlogMoreTopics() {
    return (
        <Dialog>
            <DialogTrigger>Show more</DialogTrigger>
            <DialogContent className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <DialogHeader className="mb-4">
                    <h3 className="text-lg font-semibold">More Topics</h3>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default BlogMoreTopics
