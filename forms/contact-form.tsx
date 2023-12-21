"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type FormData = z.infer<typeof formValidationSchema>
const formValidationSchema = z.object({
    email: z.string().email("Email is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    message: z.string().min(1, "Message name is required"),
})

const ContactForm = () => {
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
            await axios.post("/api/contact", {
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                message: formData.message,
            })
            reset()
            toast({
                description: "Your message has been sent.",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit((formData, event) =>
                handleSend(formData, event)
            )}
            className="w-full space-y-4"
        >
            <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div className="w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                        <Input
                            id="firstName"
                            placeholder="John"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...register("firstName")}
                            disabled={loading}
                        />
                        {errors.firstName && (
                            <div
                                className="absolute"
                                // className="absolute right-[10px] top-[10px]"
                                style={{ right: "10px", top: "10px" }}
                            >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <AlertCircle
                                                size={18}
                                                stroke="red"
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{errors.firstName.message}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                        <Input
                            id="lastName"
                            placeholder="Wick"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...register("lastName")}
                            disabled={loading}
                        />
                        {errors.lastName && (
                            <div
                                className="absolute"
                                // className="absolute right-[10px] top-[10px]"
                                style={{ right: "10px", top: "10px" }}
                            >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <AlertCircle
                                                size={18}
                                                stroke="red"
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{errors.lastName.message}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Label htmlFor="emaile">Email</Label>

                <div className="relative">
                    <Input
                        id="emaile"
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

            <div>
                <Label>Message</Label>
                <div className="relative">
                    <Textarea
                        id="message"
                        placeholder="Your message"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        {...register("message")}
                        disabled={loading}
                        rows={10}
                    />
                    {errors.message && (
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
                                        <p>{errors.message.message}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full">
                <Button className="w-full" disabled={loading} aria-label="Send">
                    Send
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
