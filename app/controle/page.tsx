'use client'

import Link from 'next/link'
// import { Suspense } from 'react'
import { PessoasTable } from "../ui/pessoas/table"

export default function Page(){
  
  return (
    <div className="w-full text-white flex justify-center items-center pt-10">
      <div>
        <h1 className="mb-8 text-5xl text-center">
            CONTROLE
          </h1>
        <div className="
        bg-[#1E1E1E]
          px-8 rounded-[10px]
          pb-14
          pt-20
          w-[370px]
          md:w-[700px]
          flex
          flex-col
          md:grid
          md:grid-cols-2
          gap-2
          voltarContainer
          "
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
          {/* <Suspense fallback={<div>Carregando os dados!</div>}> */}
            <PessoasTable />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  )
}
