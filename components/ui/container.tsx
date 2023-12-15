import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                "flex w-full max-w-[1164px] flex-col items-center",
                className
            )}
        >
            {children}
        </div>
    )
}
export default Container
