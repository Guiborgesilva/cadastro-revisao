import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import {
  Revisionista,
  UltimosRevisionistas,
  UltimosVisitantes
} from "@/app/lib/definitions"

const ITEMS_PER_PAGE = 6

export async function fetchCardData() {
  noStore()
  try {
    const revisionistaCountPromise = sql`SELECT COUNT(*) FROM vidas`
    const visitantesCountPromise = sql`SELECT COUNT(*) FROM visitantes`

    const data = await Promise.all([
      revisionistaCountPromise,
      visitantesCountPromise
    ])

    const numberOfRevisionistas = Number(data[0].rows[0].count ?? "0")
    const numberOfVisitantes = Number(data[1].rows[0].count ?? "0")

    return {
      numberOfRevisionistas,
      numberOfVisitantes
    }
  } catch (error) {
    console.error("Erro de banco de dados:", error)
    throw new Error("Erro ao buscar os dados dos cards.")
  }
}

export async function fetchUltimosRevisionistas() {
  noStore()
  try {
    const data = await sql<UltimosRevisionistas>`
      SELECT id, nome_pessoa, lider_equipe
      FROM vidas
      ORDER BY created_at DESC
      LIMIT 5`

    const ultimosRevisionistas = data.rows.map((revisionistas) => ({
      ...revisionistas
    }))
    return ultimosRevisionistas
  } catch (error) {
    console.error("Erro de banco de dados:", error)
    throw new Error("Erro ao buscar os dados no banco de dados.")
  }
}

export async function fetchRevisionistasPages(query: string) {
  noStore()
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM vidas
    WHERE
      nome_pessoa ILIKE ${`%${query}%`} OR
      data_nascimento::text ILIKE ${`%${query}%`} OR
      sexo ILIKE ${`%${query}%`} OR
      lider_equipe ILIKE ${`%${query}%`} OR
      telefone::text ILIKE ${`%${query}%`} OR
      email ILIKE ${`%${query}%`} OR
      nome_mae ILIKE ${`%${query}%`} OR
      nome_pai ILIKE ${`%${query}%`} OR
      nome_contato1 ILIKE ${`%${query}%`} OR
      telefone_contato1 ILIKE ${`%${query}%`} OR
      nome_contato2 ILIKE ${`%${query}%`} OR
      telefone_contato2 ILIKE ${`%${query}%`} OR
      nome_contato3 ILIKE ${`%${query}%`} OR
      telefone_contato3 ILIKE ${`%${query}%`} OR
      forma_pagamento ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar o número total de pessoas.")
  }
}

export async function fetchUltimosVisitantes() {
  noStore()
  try {
    const data = await sql<UltimosVisitantes>`
      SELECT id, nome, bairro
      FROM visitantes
      ORDER BY created_at DESC
      LIMIT 5`

    const ultimosVisitantes = data.rows.map((visitantes) => ({
      ...visitantes
    }))
    return ultimosVisitantes
  } catch (error) {
    console.error("Erro de banco de dados:", error)
    throw new Error("Erro ao buscar os dados no banco de dados.")
  }
}

export async function fetchVisitantesPages(query: string) {
  noStore()
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM visitantes
    WHERE
      nome ILIKE ${`%${query}%`} OR
      data_nascimento::text ILIKE ${`%${query}%`} OR
      sexo ILIKE ${`%${query}%`} OR
      telefone::text ILIKE ${`%${query}%`} OR
      endereco ILIKE ${`%${query}%`} OR
      bairro ILIKE ${`%${query}%`} OR
      quem_convidou ILIKE ${`%${query}%`} OR
      como_conheceu ILIKE ${`%${query}%`} OR
      data_visita::text ILIKE ${`%${query}%`} OR
      tipo_culto ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar o número total de visitantes.")
  }
}

export async function fetchUsuariosPages(query: string) {
  noStore()
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM users
    WHERE
      name ILIKE ${`%${query}%`} OR
      email ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar o número total de usuários.")
  }
}
