"use client"

import { useEffect, useState } from "react"
import { ArrowUpSquareIcon } from "lucide-react"

function ArrowUpProvider() {
    const [showArror, setShowArrow] = useState(false)

    const handleScrollUp = () => {
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        const handleScrollArrowVisibility = () => {
            window.scrollY > 300 ? setShowArrow(true) : setShowArrow(false)
        }

        window.addEventListener("scroll", handleScrollArrowVisibility)

        return () => {
            window.removeEventListener("scroll", handleScrollArrowVisibility)
        }
    })

    if (!showArror) {
        return null
    }

    return (
        <div
            className="fixed z-50 cursor-pointer p-4 text-foreground"
            style={{ right: "20px", bottom: "20px" }}
            onClick={handleScrollUp}
        >
            <ArrowUpSquareIcon strokeWidth={"1px"} className="h-10 w-10" />
        </div>
    )
}
export default ArrowUpProvider
