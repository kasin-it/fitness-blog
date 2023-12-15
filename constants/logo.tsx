import Link from "next/link"
import { Navigation } from "@/enums/navigation"

export const LOGO = (
    <Link href={Navigation.Home}>
        <p className="text-xl font-bold">
            <span className="text-green-700">Fitness</span>Blog
        </p>
    </Link>
)
