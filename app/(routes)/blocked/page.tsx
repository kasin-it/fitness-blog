import Image from "next/image"
import Link from "next/link"
import error_img from "@/public/error.webp"

export default function BlockedPage() {
    return (
        <div className="flex w-full flex-col items-center justify-center space-y-4 pt-20">
            <h2 className="text-center text-7xl font-bold uppercase text-green-500">
                Something went wrong!
            </h2>

            <Image src={error_img} width={600} height={600} alt="error 404" />

            <Link href="/">
                <p className="rounded-md border border-green-300 bg-green-300 px-8 py-3 text-white transition duration-200 hover:bg-white hover:text-green-300">
                    Return Home
                </p>
            </Link>
        </div>
    )
}
