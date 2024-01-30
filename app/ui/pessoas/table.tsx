import { mulish } from "../fonts"
import Search from "../search"
import { useState, useEffect } from 'react'
import { fetchPessoas } from '@/app/lib/actions'
import { QueryResultRow } from '@vercel/postgres'

async function fetchData(currentPage: number, setPessoas: Function) {
  try {
    const data = await fetchPessoas(currentPage);
    setPessoas(data);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
  }
}

export function PessoasTable() {
  const [pessoas, setPessoas] = useState<QueryResultRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetchData(currentPage, setPessoas);
  }, [currentPage]);

  return (
    <>
    <Search placeholder="Procure aqui" />
    {pessoas?.map((pessoa) => {
      return(
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
          key={pessoa.id}
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
      )
      })}
      <div
        className="flex justify-between gap-6 col-span-2 mt-6"
      >
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