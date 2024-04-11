import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request){
  try{
    const result =
      await sql`CREATE TABLE IF NOT EXISTS vidas (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, nome_pessoa varchar(255), data_nascimento varchar(100), sexo varchar(20), lider_equipe varchar(100), telefone NUMERIC NOT NULL, email varchar(50), nome_mae varchar(100), nome_pai varchar(100), nome_contato1 varchar(50), telefone_contato1 varchar(20), nome_contato2 varchar(50), telefone_contato2 varchar(20), nome_contato3 varchar(50), telefone_contato3 varchar(20), forma_pagamento varchar(50), created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL)`

      return NextResponse.json({ result }, { status: 200 })
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