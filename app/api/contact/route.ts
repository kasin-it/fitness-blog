import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { z } from "zod"

const ratelimit = new Ratelimit({
    redis: kv,
    // 5 requests from the same IP in 10 seconds
    limiter: Ratelimit.slidingWindow(5, "10 s"),
})

// let nodemailer = require("nodemailer")

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//         user: process.env.EMAIL_CREDENTIALS,
//         pass: process.env.PASSWORD_CREDENTIALS,
//     },
//     secure: true,
// })

export async function POST(req: NextRequest) {
    const ip = req.ip ?? "127.0.0.1"
    const { limit, reset, remaining } = await ratelimit.limit(ip)

    // If the rate limit has been exceeded
    if (remaining <= 0) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
            status: 429, // 429 Too Many Requests
            headers: {
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": reset.toString(),
            },
        })
    }

    // const formValidationSchema = z.object({
    //     email: z.string().email(),
    //     firstName: z.string().min(1),
    //     lastName: z.string().min(1),
    //     message: z.string().min(1),
    // })

    // const body = await req.json()

    // const response = formValidationSchema.safeParse(body)

    // if (!response.success) {
    //     return new NextResponse("Message is invalid", { status: 400 })
    // }

    // const { firstName, lastName, email, message } = response.data

    // const mailData = {
    //     from: email,
    //     to: "ksiniloit@gmail.com",
    //     subject: `FORM MESSAGE FROM (${firstName} ${lastName})`,
    //     text: message,
    //     html: message,
    // }

    // await new Promise((resolve, reject) => {
    //     // send mail
    //     transporter.sendMail(mailData, (err: any, info: any) => {
    //         if (err) {
    //             console.error(err)
    //             reject(err)
    //         } else {
    //             console.log(info)
    //             resolve(info)
    //         }
    //     })
    // })

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
        },
    })
}
