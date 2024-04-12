'use client'

import { Pessoa } from "@/app/lib/definitions"
import { nomeSobrenome } from "@/app/lib/utils"
import generatePDF from 'react-to-pdf'
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import Link from "next/link"
import Button from "@/app/ui/components/Buttons"

const montserratB = Montserrat({
  subsets: ['latin'],
  weight: '800'
})

const montserratM = Montserrat({
  subsets: ['latin'],
  weight: '500'
})

const Lustra = localFont({ src: '../Lustrabold.otf' })

export default function Rhema({
  pessoa
}:{
  pessoa: Pessoa
}
){
  const rhema = () => document.getElementById('rhema')

  return (
    <div className="bg-white h-screen w-screen flex items-center justyify-center flex-col">
      <section
        id="rhema"
        className="
          bg-white
          w-[400px]
          h-[auto]
          border-[2px]
          border-black
          p-4
          bg-[url(/sara-outline-bg.png)]
          bg-contain
          bg-no-repeat
          bg-center
        "
      >  
        <header className="flex flex-col justify-center items-center">
          <h1
            className={
              `${Lustra.className}
              text-[5rem]
              mt-[-60px]
            `}
          >
            RHEMA
          </h1>
          <h2
            className={`
              ${montserratB.className}
              text-[1.8rem]
              tracking-[.15rem]
              
            `}
          >REVISÃO DE VIDAS</h2>
        </header>
        <main
          className="
            flex
            flex-col
            justify-between
            items-center
            gap-6
            mt-8
            mb-[9px]
          "
        >
          <p
            className={`
              ${montserratM.className}
              text-[1.2rem]
            `}
          >
            {nomeSobrenome(`${pessoa.nome_pessoa.toLocaleUpperCase()}`)}
          </p>
          <p
            className={`
            ${montserratB.className}
            text-[1.4rem]
            tracking-[.40rem]
            mt-[-10px]
            `}
          >
            <hr
              className="
                bg-black
                h-[3px]
                w-full
              "
            />
            REVISIONISTA
          </p>
          <p
            className={`
              ${montserratM.className}
              text-[1.2rem]
            `}
          >
            {pessoa.lider_equipe.toLocaleUpperCase().split('|')[1]}
          </p>
          <p
            className={`
              ${montserratB.className}
              text-[1.4rem]
              tracking-[.40rem]
              mt-[-10px]
            `}
          >
            <hr
              className="
                bg-black
                h-[3px]
                w-full
              "
            />
            EQUIPE
          </p>
          <p
            className={`
              ${montserratM.className}
              text-[1.2rem]
            `}
          >
            IÇARA
          </p>
          <p
            className={`
              ${montserratB.className}
              text-[1.4rem]
              tracking-[.40rem]
              mt-[-10px]
            `}
          >
            <hr
              className="
                bg-black
                h-[3px]
                w-full
              "
            />
            CIDADE
          </p>
        </main>
    </section>
    <div className="flex items-center justify-between w-[400px] mt-4">
      <button
        onClick={() => generatePDF(rhema)}
      >
        <Button
          content="Exportar"
          className="
            text-white
            border
            bg-black
            hover:bg-black/90
            hover:text-white
            transition-all
            p-2
            rounded
            flex
            items-center
            justify-center
          "
        />
      </button>
      <Link
        href={{ pathname:'/controle' }}
        >
          <Button
            content="Voltar"
            className="
              text-white
              border
              bg-black
              hover:bg-black/90
              hover:text-white
              transition-all
              p-2
              rounded
              flex
              items-center
              justify-center
            "
          />
        </Link>
    </div>
    </div>
)
}