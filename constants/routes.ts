interface RouteInterface {
    label: string
    href: string
}

export const ROUTES: RouteInterface[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
]
