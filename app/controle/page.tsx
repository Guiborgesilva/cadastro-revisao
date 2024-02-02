'use client'

import Link from 'next/link'
// import { Suspense } from 'react'
import Search from "@/app/ui/search"
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
          py-10
          my-10
          w-[370px]
          md:w-[700px]
          "
        ><div className="flex justify-between md:justify-normal md:gap-10 items-center mb-8">
        <Link href={{ pathname:'/' }}>
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
        <Search placeholder="Procure aqui" />
        </div>
        <div
          className="
            flex
            flex-col
            md:grid
            md:grid-cols-2
            gap-2
          "
        >
          {/* <Suspense fallback={<div>Carregando os dados!</div>}> */}
            <PessoasTable />
          {/* </Suspense> */}
        </div>
        </div>
      </div>
    </div>
  )
}
