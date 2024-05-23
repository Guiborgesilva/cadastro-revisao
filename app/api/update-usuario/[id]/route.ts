import { sql } from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server"
import * as bcrypt from "bcrypt"

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const { name, email, password } = await req.json()

  try {
    // Verifica se a senha foi fornecida
    let hashedPassword
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10)
    }

    // Prepara a consulta SQL com base na presença da senha
    const query = password
      ? `
        UPDATE users
        SET
          name = $1,
          email = $2,
          password = $3
        WHERE id = $4
      `
      : `
        UPDATE users
        SET
          name = $1,
          email = $2
        WHERE id = $3
      `

    const values = password
      ? [name, email, hashedPassword, id]
      : [name, email, id]

    const data = await sql.query(query, values)

    return NextResponse.json(
      {
        message: "Usuário atualizado!",
        pessoa: data.rows
      },
      {
        status: 200
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
