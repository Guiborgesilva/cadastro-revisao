import { sql } from '@vercel/postgres'
import { Pessoa } from '@/app/lib/definitions'

export async function fetchPessoas() {
  const data = await sql<Pessoa>`
    SELECT * FROM vidas
  `
  return data.rows

}