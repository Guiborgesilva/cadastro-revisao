import { sql } from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
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
  // Nas consultas SQL (INSERT, DELETE, UPDATE...) que utilizam variaveis dinamicas, é recomendado utilizar placeholders ($1, $2, $3...) e ao final passar as variáveis [nome, sexo, telefone...]
  try {
    const pessoa = await sql.query(`
    INSERT INTO vidas (
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
    ) VALUES (
      $1, to_date($2, 'YYYY-MM-DD'), $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
      [nome_pessoa, data_nascimento, sexo, lider_equipe, telefone, email, nome_mae, nome_pai, nome_contato1, telefone_contato1, nome_contato2, telefone_contato2, nome_contato3, telefone_contato3, forma_pagamento])
    console.log(pessoa)
    return NextResponse.json({
      message: 'Pessoa cadastrada!',
      pessoa: pessoa.rows
    },{
      status: 200
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: `Error: ${error}`
    },{
      status: 500
    })
  }
}