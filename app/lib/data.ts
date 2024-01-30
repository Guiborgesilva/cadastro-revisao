import { sql } from '@vercel/postgres'
import { Pessoa } from '@/app/lib/definitions'

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPessoas(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const limit = ITEMS_PER_PAGE
    const offsetValue = offset
    const pessoas = await sql`
      SELECT * FROM vidas
      WHERE
        vidas.nome_pessoa ILIKE '%' || ${query} || '%' OR
        vidas.data_nascimento ILIKE '%' || ${query} || '%' OR
        vidas.sexo ILIKE '%' || ${query} || '%' OR
        vidas.lider_equipe ILIKE '%' || ${query} || '%' OR
        vidas.telefone ILIKE '%' || ${query} || '%' OR
        vidas.email ILIKE '%' || ${query} || '%' OR
        vidas.nome_mae ILIKE '%' || ${query} || '%' OR
        vidas.nome_pai ILIKE '%' || ${query} || '%'
      LIMIT ${limit} OFFSET ${offsetValue}
    `;

    return pessoas.rows;
    // const pessoas = await sql`
    //   SELECT * FROM pessoas
    //   WHERE
    //     pessoas.nome_pessoa ILIKE ${`%${query}%`} OR
    //     pessoas.data_nascimento ILIKE ${`%${query}%`} OR
    //     pessoas.sexo ILIKE ${`%${query}%`} OR
    //     pessoas.lider_equipe ILIKE ${`%${query}%`} OR
    //     pessoas.telefone ILIKE ${`%${query}%`} OR
    //     pessoas.email ILIKE ${`%${query}%`} OR
    //     pessoas.nome_mae ILIKE ${`%${query}%`} OR
    //     pessoas.nome_pai ILIKE ${`%${query}%`} OR
    //   LIMIT ${limit} OFFSET ${offsetValue}
    // `;

    // return pessoas.rows;
  } catch (error) {
    console.error('Database Error:', error);
  }
}