import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request){
  try{
    const createTable =
      await sql`CREATE TABLE IF NOT EXISTS users (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, nome varchar(255), email TEXT NOT NULL UNIQUE, senha TEXT NOT NULL, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL)`

      return NextResponse.json({ createTable }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}

/*
***** CASO NÃO SEJA POSSÍVEL CRIAR A TABELA POR CAUSA DO UUID *****
RODAR ESSE CÓDIGO NA QUERY DA VERCEL PRIMEIRO
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
*/