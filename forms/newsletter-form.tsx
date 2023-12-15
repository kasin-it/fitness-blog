"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

type FormData = z.infer<typeof formValidationSchema>
const formValidationSchema = z.object({
    email: z.string().email(),
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
                <Input
                    id="email"
                    placeholder="JohnWick33@mail.com"
                    type="email"
                    {...register("email")}
                    disabled={loading}
                />
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
