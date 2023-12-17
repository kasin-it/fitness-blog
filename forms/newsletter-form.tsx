"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type FormData = z.infer<typeof formValidationSchema>
const formValidationSchema = z.object({
    email: z.string().email("Email is required"),
})

const NewsletterForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formValidationSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    })

    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const handleSend = async (formData: FormData, event: any) => {
        event.preventDefault()
        setLoading(true)

        try {
            reset()
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        } finally {
            setLoading(false)
            toast({
                description: "Your message has been sent.",
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit((formData, event) =>
                handleSend(formData, event)
            )}
            className="w-full space-y-4"
        >
            <div>
                <Label htmlFor="email">Email</Label>

                <div className="relative">
                    <Input
                        id="email"
                        placeholder="JohnWick33@mail.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={loading}
                        {...register("email")}
                        className={`${
                            errors.email ? "border border-red-500 pr-10" : ""
                        }`}
                    />
                    {errors.email && (
                        <div
                            className="absolute"
                            // className="absolute right-[10px] top-[10px]"
                            style={{ right: "10px", top: "10px" }}
                        >
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <AlertCircle size={18} stroke="red" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{errors.email.message}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full">
                <Button className="w-full" disabled={loading}>
                    Sign up
                </Button>
            </div>
        </form>
    )
}

export default NewsletterForm
