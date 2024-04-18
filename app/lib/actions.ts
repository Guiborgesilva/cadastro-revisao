'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { unstable_noStore as noStore } from 'next/cache'
import { Pessoa } from '@/app/lib/definitions'

export async function fetchPessoaById(id: string){
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

const ITEMS_PER_PAGE = 6
export async function fetchFilteredPessoas(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();

  try {
    const pessoas = await sql<Pessoa>`
      SELECT
        id,
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
      FROM vidas
      WHERE
        vidas.nome_pessoa ILIKE ${`%${query}%`} OR
        vidas.data_nascimento::text ILIKE ${`%${query}%`} OR
        vidas.sexo ILIKE ${`%${query}%`} OR
        vidas.lider_equipe ILIKE ${`%${query}%`} OR
        vidas.telefone::text ILIKE ${`%${query}%`} OR
        vidas.email ILIKE ${`%${query}%`} OR
        vidas.nome_mae ILIKE ${`%${query}%`} OR
        vidas.nome_pai ILIKE ${`%${query}%`} OR
        vidas.nome_contato1 ILIKE ${`%${query}%`} OR
        vidas.telefone_contato1 ILIKE ${`%${query}%`} OR
        vidas.nome_contato2 ILIKE ${`%${query}%`} OR
        vidas.telefone_contato2 ILIKE ${`%${query}%`} OR
        vidas.nome_contato3 ILIKE ${`%${query}%`} OR
        vidas.telefone_contato3 ILIKE ${`%${query}%`} OR
        vidas.forma_pagamento ILIKE ${`%${query}%`}
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return pessoas.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Falha ao buscar os dados!');
  }
}

export async function fetchPessoasPages(query: string) {
  noStore();
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM vidas
    WHERE
      vidas.nome_pessoa ILIKE ${`%${query}%`} OR
      vidas.data_nascimento::text ILIKE ${`%${query}%`} OR
      vidas.sexo ILIKE ${`%${query}%`} OR
      vidas.lider_equipe ILIKE ${`%${query}%`} OR
      vidas.telefone::text ILIKE ${`%${query}%`} OR
      vidas.email ILIKE ${`%${query}%`} OR
      vidas.nome_mae ILIKE ${`%${query}%`} OR
      vidas.nome_pai ILIKE ${`%${query}%`} OR
      vidas.nome_contato1 ILIKE ${`%${query}%`} OR
      vidas.telefone_contato1 ILIKE ${`%${query}%`} OR
      vidas.nome_contato2 ILIKE ${`%${query}%`} OR
      vidas.telefone_contato2 ILIKE ${`%${query}%`} OR
      vidas.nome_contato3 ILIKE ${`%${query}%`} OR
      vidas.telefone_contato3 ILIKE ${`%${query}%`} OR
      vidas.forma_pagamento ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Falha ao buscar o número total de pessoas.');
  }
}

export async function deletePessoa(id: string){
  try{
    await sql `DELETE FROM vidas WHERE id = ${id}`
    revalidatePath('/controle')
    return { message: 'Pessoa deletada!' }
  } catch (error) {
    return{
      message: 'Erro de Banco de Dados: Falha ao Deletar essa Pessoa!'
    }
  }
}