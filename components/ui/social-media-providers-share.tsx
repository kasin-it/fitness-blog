"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "lucide-react"
import {
    FacebookIcon,
    FacebookMessengerShareButton,
    TwitterShareButton,
    XIcon,
} from "react-share"

import { useToast } from "@/hooks/use-toast"

import { Button } from "./button"

interface SocialMediaProvidersShareProps {
    className?: string
}

function SocialMediaProvidersShare({
    className,
}: SocialMediaProvidersShareProps) {
    const [isMounted, setIsMounted] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
        toast({
            description: "Copied to clipboard.",
        })
    }

    return (
        <div className={className}>
            <TwitterShareButton url={window.location.href} aria-label="twitter">
                <XIcon size={32} round />
            </TwitterShareButton>
            <FacebookMessengerShareButton
                url={window.location.href}
                appId="df"
                aria-label="facebook"
            >
                <FacebookIcon size={32} round />
            </FacebookMessengerShareButton>
            <Button
                aria-label="copy to clipboard"
                variant={"outline"}
                className="flex h-8 w-8 items-center justify-center rounded-full p-0"
                onClick={handleCopyToClipboard}
            >
                <Link className="h-4 w-4" />
            </Button>
        </div>
    )
}
export default SocialMediaProvidersShare
