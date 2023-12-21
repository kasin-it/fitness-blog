"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ROUTES } from "@/constants/routes"

import { cn } from "@/lib/utils"

interface NavRoutesProps {
    className?: string
}

function NavRoutes({ className }: NavRoutesProps) {
    const pathname = usePathname()
    return (
        <ul className={cn("inline-flex space-x-10", className)}>
            {ROUTES.map((route) => (
                <li key={route.label}>
                    <Link
                        href={route.href}
                        aria-label={route.label}
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
