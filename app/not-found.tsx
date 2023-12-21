import Image from "next/image"
import Link from "next/link"
import not_found_img from "@/public/404.webp"

export default function NotFound() {
    return (
        <div className="flex w-full flex-col items-center justify-center space-y-4 pt-20">
            <h2 className="text-7xl font-bold uppercase text-green-700">
                Not Found
            </h2>
            <p className=" text-muted-foreground">
                Could not find requested resource
            </p>
            <Image
                src={not_found_img}
                width={600}
                height={600}
                alt="error 404"
            />
            <Link href="/">
                <p className="rounded-md border border-green-300 bg-green-300 px-8 py-3 text-white transition duration-200 hover:bg-white hover:text-green-300">
                    Return Home
                </p>
            </Link>
        </div>
    )
}
