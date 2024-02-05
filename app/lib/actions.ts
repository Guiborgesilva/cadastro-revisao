'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'
import { Pessoa } from "./definitions"

export type State = {
  errors?: {
    id?: string[]
    nome_pessoa?: string[]
    data_nascimento?: string[]
    sexo?: string[]
    lider_equipe?: string[]
    telefone?: string[]
    email?: string[]
    nome_mae?: string[]
    nome_pai?: string[]
  }
  message?: string | null
}

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

const ITEMS_PER_PAGE = 6

export async function fetchPessoas(page: number) {
  noStore()
  try{
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const limit = ITEMS_PER_PAGE;
    const { rows } = await sql`
      SELECT * FROM vidas
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
    // console.log(rows) Mostra o que foi cadastrado no console do servidor
    return rows
  } catch (error) {
    console.error(`Erro de Banco de Dados: ${error}`)
    return []
  }
}

export async function fetchPessoasById(id: string){
  noStore()
  try{
    const data = await sql<Pessoa>`
      SELECT * FROM vidas WHERE id = ${id}
    `
    const pessoa = data.rows.map((pessoa) => ({
      ...pessoa
    }))

    return pessoa[0]
  } catch (error) {
    console.error(`Falha ao buscar os dados dessa Pessoa, erro: ${error}`)
    throw new Error('Falha ao buscar os dados dessa Pessoa.')
  }
}

const UpdatePessoa = PessoaSchema.omit({ id: true, date: true });

export async function updatePessoa(id: string, prevState: Pessoa, formData: FormData) {
  const validatedFields = UpdatePessoa.safeParse({
    nome_pessoa: formData.get('nome_pessoa'),
    data_nascimento: formData.get('data_nascimento'),
    sexo: formData.get('sexo'),
    lider_equipe: formData.get('lider_equipe'),
    telefone: formData.get('telefone'),
    email: formData.get('email'),
    nome_mae: formData.get('nome_mae'),
    nome_pai: formData.get('nome_pai')
  });

  if(!validatedFields.success){
    return{
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Há campos faltando, por favor tente novamente!'
    }
  }
 
  const {
    nome_pessoa,
    data_nascimento,
    sexo,
    lider_equipe,
    telefone,
    email,
    nome_mae,
    nome_pai
  } = validatedFields.data
 
  try{
    await sql`
      UPDATE invoices
      SET id = ${id},
      nome_pessoa = ${nome_pessoa},
      data_nascimento = ${data_nascimento},
      sexo = ${sexo},
      lider_equipe = ${lider_equipe},
      telefone = ${telefone},
      email = ${email},
      nome_mae = ${nome_mae},
      nome_pai = ${nome_pai}
      WHERE id = ${id}
    `;
  } catch (error){
    return{
      message: 'Erro de Banco de Dados: Falha ao atualizar os dados!'
    }
  }
 
  revalidatePath('/controle');
  redirect('/controle');
}