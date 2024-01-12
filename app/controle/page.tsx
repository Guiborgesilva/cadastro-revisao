'use client'

import { mulish } from '@/app/ui/fonts'
import { fetchPessoas } from '@/app/lib/data'
import Link from 'next/link'

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

export default async function PessoasTable(){
  const people = await fetchPessoas()
  
  return (
    <div className="w-full text-white flex justify-center items-center pt-10">
      <div>
        <h1 className="mb-8 text-5xl text-center">
          CONTROLE
        </h1>
        <div className={`
          ${mulish.className}
        bg-[#1E1E1E]
          px-8 rounded-[10px]
          pb-8
          pt-14
          w-[370px]
          md:w-[700px]
          grid
          grid-cols-1
          md:grid-cols-2
          gap-2
          voltarContainer
          `
          }
        >
          <Link href={{ pathname:'/' }} className="voltar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>

          </Link>
          {people.map((pessoa) => {
            return (
              <div className="
                w-full
                p-2
                rounded-[10px]
                bsw
                bw
                transition
                flex
                "
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
        </div>
      </div>
    </div>
  )
}
