"use server"

import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"
import { Revisionista, Usuario, Visitante } from "@/app/lib/definitions"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { revalidatePath } from "next/cache"

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData)
    return "success"
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "invalid"
        default:
          return "error"
      }
    }
    throw error
  }
}

// export const userSchema = z.object({
//   id: z.string(),
//   nome: z
//     .string()
//     .min(1, 'Por favor, digite seu nome!')
//     .transform(capitalizarNome),
//   email: z.string().toLowerCase().email('Por favor, digite um email válido!'),
//   senha: z.string().min(6, 'Sua senha precisa ter no mínimo 6 caracteres!'),
//   created_at: z.string(),
// })

// export const RegisterUser = userSchema.omit({ id: true, created_at: true })

const ITEMS_PER_PAGE = 6
export async function fetchFilteredRevisionistas(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  noStore()

  try {
    const revisionistas = await sql<Revisionista>`
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
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    return revisionistas.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar os dados!")
  }
}

export async function fetchRevisionistaById(id: string) {
  noStore()
  try {
    const data = await sql<Revisionista>`
      SELECT * FROM vidas WHERE id = ${id}
    `
    const revisionista = data.rows.map((revisionista) => ({
      ...revisionista
    }))

    return revisionista[0]
  } catch (error) {
    console.error(`Falha ao buscar os dados desse Revisionista, erro: ${error}`)
    throw new Error("Falha ao buscar os dados desse Revisionista.")
  }
}

export async function fetchFilteredVisitantes(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  noStore()

  try {
    const visitantes = await sql<Visitante>`
      SELECT
        id,
        nome,
        data_nascimento,
        sexo,
        telefone,
        endereco,
        bairro,
        quem_convidou,
        como_conheceu,
        data_visita,
        tipo_culto
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
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    return visitantes.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar os dados!")
  }
}

export async function fetchVisitanteById(id: string) {
  noStore()
  try {
    const data = await sql<Visitante>`
      SELECT * FROM visitantes WHERE id = ${id}
    `
    const visitante = data.rows.map((visitante) => ({
      ...visitante
    }))

    return visitante[0]
  } catch (error) {
    console.error(`Falha ao buscar os dados desse Visitante, erro: ${error}`)
    throw new Error("Falha ao buscar os dados desse Visitante.")
  }
}

export async function fetchFilteredUsuarios(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  noStore()

  try {
    const data = await sql<Usuario>`
      SELECT
        id,
        name,
        email,
        password
      FROM users
      WHERE
        name ILIKE ${`%${query}%`} OR
        email ILIKE ${`%${query}%`} OR
        password ILIKE ${`%${query}%`}
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Falha ao buscar os dados!")
  }
}

export async function fetchUsuarioById(id: string) {
  noStore()
  try {
    const data = await sql<Usuario>`
      SELECT * FROM users WHERE id = ${id}
    `
    const usuario = data.rows.map((usuario) => ({
      ...usuario
    }))

    return usuario[0]
  } catch (error) {
    console.error(`Falha ao buscar os dados desse Usuário, erro: ${error}`)
    throw new Error("Falha ao buscar os dados desse Usuário.")
  }
}

export async function deleteRevisionista(id: string) {
  try {
    await sql`DELETE FROM vidas WHERE id = ${id}`
    revalidatePath("/dashboard/revisionistas")
    return { message: "Revisionista deletado!" }
  } catch (error) {
    return {
      message: "Erro de Banco de Dados: Falha ao Deletar esse Revisionista!"
    }
  }
}

export async function deleteVisitante(id: string) {
  try {
    await sql`DELETE FROM visitantes WHERE id = ${id}`
    revalidatePath("/dashboard/visitantes")
    return { message: "Visitante deletado!" }
  } catch (error) {
    return {
      message: "Erro de Banco de Dados: Falha ao Deletar esse Visitante!"
    }
  }
}

export async function deleteUsuario(id: string) {
  try {
    await sql`DELETE FROM users WHERE id = ${id}`
    revalidatePath("/dashboard/usuarios")
    return { message: "Usuário deletado!" }
  } catch (error) {
    return {
      message: "Erro de Banco de Dados: Falha ao Deletar esse Usuário!"
    }
  }
}
