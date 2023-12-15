import { SocialMediaLinks } from "@/enums/social-media-links"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const SOCIAL_MEDIA_PROVIDERS_ICONS = [
    {
        src: <FaFacebookF />,
        href: SocialMediaLinks.Facebook,
        provider: "facebook",
    },
    {
        src: <FaInstagram />,
        href: SocialMediaLinks.Instagram,
        provider: "instagram",
    },
    {
        src: <FaTiktok />,
        href: SocialMediaLinks.Tiktok,
        provider: "tiktok",
    },
    {
        src: <FaXTwitter />,
        href: SocialMediaLinks.X,
        provider: "tiktok",
    },
] as const
