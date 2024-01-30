'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'

const PessoaSchema = z.object({
    id: z.string(),
    nome_pessoa: z.string(),
    data_nascimento: z.string(),
    sexo: z.string(),
    lider_equipe: z.string(),
    telefone: z.string(),
    email: z.string(),
    nome_mae: z.string(),
    nome_pai: z.string(),
    created_at: z.string()
  })

const CreatePessoa = PessoaSchema.omit({ id:true, created_at:true })

export async function createPessoa(formData: FormData){

  const {
    nome_pessoa,
    data_nascimento,
    sexo,
    lider_equipe,
    telefone,
    email,
    nome_mae,
    nome_pai
  } = CreatePessoa.parse({
    nome_pessoa: formData.get('nome_pessoa'),
    data_nascimento: formData.get('data_nascimento'),
    sexo: formData.get('sexo'),
    lider_equipe: formData.get('lider_equipe'),
    telefone: formData.get('telefone'),
    email: formData.get('email'),
    nome_mae: formData.get('nome_mae'),
    nome_pai: formData.get('nome_pai')
  })
  
  const date = new Date().toISOString()
  
  try{    
    await sql.query(
      `INSERT INTO vidas (nome_pessoa, data_nascimento, sexo, lider_equipe, telefone, email, nome_mae, nome_pai, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [nome_pessoa, data_nascimento, sexo, lider_equipe, telefone, email, nome_mae, nome_pai, date]
    )
      } catch (error) {
        return console.error(`Erro de Banco de Dados: ${error}`)
      }
      revalidatePath('/')
      redirect('/')
}

const ITEMS_PER_PAGE = 10

export async function fetchPessoas(page: number) {
  try{
    noStore()
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const limit = ITEMS_PER_PAGE;
    const { rows } = await sql`
      SELECT * FROM vidas
      ORDER BY created_at
      LIMIT ${limit} OFFSET ${offset}
    `
    // console.log(rows) Mostra o que foi cadastrado no console do servidor
    return rows
  } catch (error) {
    console.error(`Erro de Banco de Dados: ${error}`)
    return []
  }
}