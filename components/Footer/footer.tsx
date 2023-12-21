import Link from "next/link"
import { LOGO } from "@/constants/logo"
import { SOCIAL_MEDIA_PROVIDERS_ICONS } from "@/constants/social-media-providers"
import { Navigation } from "@/enums/navigation"

import Container from "../ui/container"

interface FooterSectionInterface {
    section: string
    links: { label: string; href: string }[]
}

const FooterSection = ({ section, links }: FooterSectionInterface) => (
    <div className="flex flex-col space-y-3">
        <h1 className="text-xl font-bold text-muted-foreground">{section}</h1>
        <ul className="flex flex-col space-y-2 font-semibold">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        className="transition duration-200 hover:opacity-60"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

const SocialIcons = () => (
    <div className="inline-flex gap-x-5 text-2xl">
        {SOCIAL_MEDIA_PROVIDERS_ICONS.map((provider) => (
            <Link key={provider.provider} href={provider.href} aria-label={provider.provider}>
                {provider.src}
            </Link>
        ))}
    </div>
)

function Footer() {
    const FOOTER_NAVIGATION: FooterSectionInterface[] = [
        {
            section: "Company",
            links: [
                { label: "Blog", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Services", href: "#" },
                { label: "FAQ", href: "#" },
            ],
        },
        {
            section: "About",
            links: [
                { label: "Blog", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Services", href: "#" },
                { label: "FAQ", href: "#" },
            ],
        },
        {
            section: "Contact",
            links: [
                { label: "Blog", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Services", href: "#" },
                { label: "FAQ", href: "#" },
            ],
        },
    ]

    return (
        <div className="flex w-full justify-center py-24">
            <Container>
                <footer className="flex w-full max-w-[1920px] flex-wrap justify-between gap-10 px-3 sm:px-12 md:px-24">
                    <div className="flex w-full flex-col items-start pb-6 md:w-auto">
                        <div className="flex w-full flex-col items-start justify-between space-y-4 sm:flex-row md:flex-col">
                            <div>
                                {LOGO}
                                <p className="text-sm">©2023</p>
                            </div>

                            <SocialIcons />
                        </div>
                    </div>

                    {FOOTER_NAVIGATION.map((section) => (
                        <FooterSection
                            key={section.section}
                            section={section.section}
                            links={section.links}
                        />
                    ))}
                </footer>
            </Container>
        </div>
    )
}

export default Footer
