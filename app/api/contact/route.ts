import { NextResponse } from "next/server"
import axios from 'axios'
import { z } from "zod"

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = bodySchema.parse(body)
    const messageData = {
      embeds: [
        {
          "type": "rich",
          "title": `Mensagem de Contato`,
          "description": "",
          "color": 0xff1900,
          "fields": [
            {
              "name": `Nome`,
              "value": name,
              "inline": true
            },
            {
              "name": `Email`,
              "value": email,
              "inline": true
            },
            {
              "name": `Mensagem`,
              "value": message
            }
          ]
        }
      ]
    }

    await axios.post(WEBHOOK_URL, messageData)
    return NextResponse.json({
      message: "Mensagem enviada com sucesso!"
    })
  } catch (err) {
    console.error(err)
    return NextResponse.error()
  }
}