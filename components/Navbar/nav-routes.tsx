"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ROUTES } from "@/constants/routes"

import { cn } from "@/lib/utils"

interface NavRoutesInterface {
    className?: string
}

function NavRoutes({ className }: NavRoutesInterface) {
    const pathname = usePathname()
    return (
        <ul className={cn("inline-flex space-x-10", className)}>
            {ROUTES.map((route) => (
                <li key={route.label}>
                    <Link
                        href={route.href}
                        className={cn(
                            "font-medium transition-colors duration-200 hover:text-green-500",
                            pathname == route.href
                                ? "text-green-500 hover:cursor-default"
                                : null
                        )}
                    >
                        {route.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default NavRoutes
