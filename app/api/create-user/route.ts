import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'

export async function POST(req: NextRequest){
  const { nome, email, senha } = await req.json()
  const hashSenha = await bcrypt.hash(senha, 10)

  try{
    const user = await sql.query(`
      INSERT INTO users (
        nome,
        email,
        senha
      ) VALUES (
          $1,
          $2,
          $3
        )
    `, [nome, email, hashSenha])

    return NextResponse.json({
      message: 'Usuário cadastrado!',
      user: user.rows
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