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
            <TwitterShareButton url={window.location.href}>
                <XIcon size={32} round />
            </TwitterShareButton>
            <FacebookMessengerShareButton url={window.location.href} appId="df">
                <FacebookIcon size={32} round />
            </FacebookMessengerShareButton>
            <Button
                variant={"outline"}
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full p-0"
                onClick={handleCopyToClipboard}
            >
                <Link className="h-4 w-4" />
            </Button>
        </div>
    )
}
export default SocialMediaProvidersShare
