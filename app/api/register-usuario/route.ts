import { sql } from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server"
import * as bcrypt from "bcrypt"

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()
  const hashPassword = await bcrypt.hash(password, 10)

  try {
    const user = await sql.query(
      `
      INSERT INTO users (
        name,
        email,
        password
      ) VALUES (
          $1,
          $2,
          $3
        )
    `,
      [name, email, hashPassword]
    )

    return NextResponse.json(
      {
        message: "Usuário cadastrado!",
        user: user.rows
      },
      {
        status: 201
      }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: `Error: ${error}`
      },
      {
        status: 500
      }
    )
  }
}
