import { mulish } from "../fonts"
import { useState, useEffect } from 'react'
import { fetchPessoas } from '@/app/lib/actions'
import { QueryResultRow } from '@vercel/postgres'
import Link from 'next/link'

async function fetchData(currentPage: number, setPessoas: Function) {
  try {
    const data = await fetchPessoas(currentPage);
    setPessoas(data);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
  }
}

export function PessoasTable() {
  const [pessoas, setPessoas] = useState<QueryResultRow[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    fetchData(currentPage, setPessoas);
  }, [currentPage])

  const isFirstPage = currentPage === 1
  const isLastPage = pessoas.length < 6

  return (
    <>
    {pessoas?.map((pessoa) => {
      return(
        <Link href={`/controle/${pessoa.id}/edit`} key={pessoa.id}>
          <div className={`
            ${mulish.className}
            w-full
            p-2
            rounded-[10px]
            transition
            bw
            bsw
            card
            flex
            `}
          >
            <div className="
              rounded-full
              size-10
              bw
              flex
              justify-center
              items-center
              "
            >
              <h2 className="text-2xl">
                {pessoa.nome_pessoa.substring(0,1)}
              </h2>
            </div>
            <div className="ml-3 flex flex-col">
              <p className="justify-start">
                {nomeSobrenome(`${pessoa.nome_pessoa}`)}
              </p>
              <p className="text-[13px] justify-end">{pessoa.lider_equipe}</p>
            </div>
          </div>
        </Link>
      )
      })}
      <div
        className="
          flex
          justify-center
          gap-6
          col-span-2
          mt-6
          "
        >
          {!isFirstPage && (
            <button
              onClick={() => setCurrentPage(prevPage => prevPage - 1)}
              className={`
                ${mulish.className}
                text-white
                w-[100px]
                h-[46px]
                rounded-[10px]
                hover:bg-white
                hover:text-black
                transition
                pointer
                bw
              `}
            >Anterior</button>
          )}
          {!isLastPage && (
            <button
              onClick={() => setCurrentPage(prevPage => prevPage + 1)}
              className={`
                ${mulish.className}
                text-white
                w-[100px]
                h-[46px]
                rounded-[10px]
                hover:bg-white
                hover:text-black
                transition
                pointer
                bw
              `}
            >Próxima</button>
          )}
      </div>
    </>
  );
}

function nomeSobrenome(str: string) {
  var arr = str.split(' ');
  if(
    arr[1] == 'de' ||
    arr[1] == 'De' ||
    arr[1] == 'da' ||
    arr[1] == 'Da' ||
    arr[1] == 'do' ||
    arr[1] == 'Do' ||
    arr[1] == 'das' ||
    arr[1] == 'Das' ||
    arr[1] == 'dos' ||
    arr[1] == 'Dos'
    ) {
      return arr[0] + " " + arr[1] + " " + arr[2]
  } else if (
    arr[1] == null ||
    arr[1] == undefined
    ){
      return arr[0]
    } else {
      return arr[0] + " " + arr[1]
  }
}