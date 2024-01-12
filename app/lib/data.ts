import { sql } from '@vercel/postgres'
import { Pessoa } from '@/app/lib/definitions'

export async function fetchPessoas() {
  const data = await sql<Pessoa>`
    SELECT * FROM vidas ORDER BY nome_pessoa LIMIT 100
  `
  return data.rows

}