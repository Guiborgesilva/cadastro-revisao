import { mulish } from "../fonts"
import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { fetchPessoas } from '@/app/lib/actions'
import { QueryResultRow } from '@vercel/postgres'
import Link from 'next/link'

async function fetchData(currentPage: number, setPessoas: Function, setLoading: Function) {
  try {
    setLoading(true)
    const data = await fetchPessoas(currentPage);
    setPessoas(data);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
  } finally {
    setLoading(false)
  }
}

export function PessoasTable() {
  const [pessoas, setPessoas] = useState<QueryResultRow[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    fetchData(currentPage, setPessoas, setLoading);
  }, [currentPage])

  const isFirstPage = currentPage === 1
  const isLastPage = pessoas.length < 6

  const groupedPessoas = Array.from({ length: Math.ceil(pessoas.length / 3) }, (_, index) =>
    pessoas.slice(index * 3, index * 3 + 3)
  )

  return (
    <>
    {loading ? (
      <div className="flex flex-col md:flex-row md:gap-2">
        {Array.from({ length: 2 }, (_, index) => (
          <div className="flex-1" key={index}>
            <Skeleton
              count={3}
              height={61.5}
              width={314}
              baseColor="#a19f9f"
              highlightColor="#444"
              borderRadius={10}
            />
          </div>
        ))}
      </div>
    ) : (
    pessoas?.map((pessoa) => {
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
                {pessoa.nome_pessoa.substring(0,1) || <Skeleton />}
              </h2>
            </div>
            <div className="ml-3 flex flex-col">
              <p className="justify-start">
                {nomeSobrenome(`${pessoa.nome_pessoa || <Skeleton />}`)}
              </p>
              <p className="text-[13px] justify-end">{pessoa.lider_equipe || <Skeleton />}</p>
            </div>
          </div>
        </Link>
      )
      }))}
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