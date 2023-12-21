import { NextRequest, NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { z } from "zod"

export async function POST(req: NextRequest) {
    const formValidationSchema = z.object({
        email: z.string().email(),
    })
    const body = await req.json()
    const response = formValidationSchema.safeParse(body)

    if (!response.success) {
        return new NextResponse("Email is invalid", { status: 400 })
    }
    const { email } = response.data

    try {
        const result =
            await sql`INSERT INTO newsletter (Email) VALUES (${email})`

        return NextResponse.json({ result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
