import { sql } from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const {
    nome_pessoa,
    data_nascimento,
    sexo,
    lider_equipe,
    telefone,
    email,
    nome_mae,
    nome_pai,
    nome_contato1,
    telefone_contato1,
    nome_contato2,
    telefone_contato2,
    nome_contato3,
    telefone_contato3,
    forma_pagamento
  } = await req.json()

  try {
    const revisionista = await sql.query(
      `
      UPDATE vidas
      SET
        nome_pessoa = $1,
        data_nascimento = to_date($2, 'YYYY-MM-DD'),
        sexo = $3,
        lider_equipe = $4,
        telefone = $5,
        email = $6,
        nome_mae = $7,
        nome_pai = $8,
        nome_contato1 = $9,
        telefone_contato1 = $10,
        nome_contato2 = $11,
        telefone_contato2 = $12,
        nome_contato3 = $13,
        telefone_contato3 = $14,
        forma_pagamento = $15
        WHERE id = $16
      `,
      [
        nome_pessoa,
        data_nascimento,
        sexo,
        lider_equipe,
        telefone,
        email,
        nome_mae,
        nome_pai,
        nome_contato1,
        telefone_contato1,
        nome_contato2,
        telefone_contato2,
        nome_contato3,
        telefone_contato3,
        forma_pagamento,
        id
      ]
    )
    return NextResponse.json(
      {
        message: "Revisionista atualizado!",
        pessoa: revisionista.rows
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
