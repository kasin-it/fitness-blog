import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

let nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_CREDENTIALS,
        pass: process.env.PASSWORD_CREDENTIALS,
    },
    secure: true,
})

export async function POST(req: NextRequest) {
    const formValidationSchema = z.object({
        email: z.string().email(),
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        message: z.string().min(1),
    })

    try {
        const body = await req.json()
        const response = formValidationSchema.safeParse(body)
        if (!response.success) {
            return new NextResponse("Message is invalid", { status: 400 })
        }
        const { firstName, lastName, email, message } = response.data
        const mailData = {
            from: email,
            to: process.env.EMAIL_RECIVER,
            subject: `FORM MESSAGE FROM (${firstName} ${lastName})`,
            text: message,
            html: message,
        }
        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err: any, info: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(info)
                }
            })
        })
        return NextResponse.json({ status: "ok" }, { status: 200 })
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
