'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
    id: z.string(),
    nome_pessoa: z.string(),
    data_nascimento: z.string(),
    sexo: z.string(),
    lider_equipe: z.string(),
    telefone: z.string(),
    email: z.string(),
    nome_mae: z.string(),
    nome_pai: z.string(),
  })

const CreatePessoa = FormSchema.omit({ id:true, date:true })

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

  try{
    await sql`
      INSERT INTO vidas (
        nome_pessoa,
        data_nascimento,
        sexo,
        lider_equipe,
        telefone,
        email,
        nome_mae,
        nome_pai
      ) VALUES (
        ${nome_pessoa},
        ${data_nascimento},
        ${sexo},
        ${lider_equipe},
        ${telefone},
        ${email},
        ${nome_mae},
        ${nome_pai}
      )
    `
  } catch (error) {
    message: 'Houve um erro no Banco de Dados ao cadastrar essa pessoa!'
  }

  revalidatePath('/signup')
  redirect('/signup')
}