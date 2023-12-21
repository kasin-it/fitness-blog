"use client"

import { usePathname } from "next/navigation"
import { ROUTES } from "@/constants/routes"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface MobileNavigationProps {
    className?: string
}

function MobileNavigation({ className }: MobileNavigationProps) {
    const pathname = usePathname()

    return (
        <NavigationMenu className={className}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-0">
                        <Menu className="h-9 w-9" strokeWidth={0.8} />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="px-12 py-6">
                        <ul className="space-y-4">
                            {ROUTES.map((route) => (
                                <li key={route.label}>
                                    <NavigationMenuLink
                                        href={route.href}
                                        className={cn(
                                            "font-medium transition-colors duration-200 hover:text-green-500",
                                            pathname == route.href
                                                ? "text-green-500 hover:cursor-default"
                                                : null
                                        )}
                                    >
                                        {route.label}
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default MobileNavigation
