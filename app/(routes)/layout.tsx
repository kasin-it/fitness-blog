import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"

import "../globals.css"

import dynamic from "next/dynamic"
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "@/providers/toaster"

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"

const MainProvider = dynamic(() => import("@/providers/main-provider"), {
    ssr: true,
})

const font = Roboto_Condensed({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <body className={cn(font.className, "px-2 md:px-10")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <Navbar />
                    {children}
                    <Footer />
                    <MainProvider />
                </ThemeProvider>
            </body>
        </html>
    )
}
