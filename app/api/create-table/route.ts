import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request){
  try{
    const result =
      await sql`CREATE TABLE vidas (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, nome_pessoa varchar(255), data_nascimento varchar(10), sexo varchar(50), lider_equipe varchar(255), telefone varchar(20), email varchar(50), nome_mae varchar(255), nome_pai varchar(255), forma_pagamento varchar(50), created_at DATE NOT NULL)`

      return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}