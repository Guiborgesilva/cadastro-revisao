'use client'

import Link from "next/link"
import { useState } from "react"
import { Montserrat } from "next/font/google"
import { PessoaForm, SignupForm } from "@/app/ui/components/SignupForm"
import { ModalError, ModalSuccess } from "@/app/ui/components/ModalMessages"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Signup(){
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  async function onSubmit(data: PessoaForm) {
    try{
      const response = await fetch('/api/register-pessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if(response.ok) {
        const responseData = await response.json()
        console.log('Dados enviados com sucesso!', responseData)
        setShowSuccessModal(true)
      } else {
        setShowErrorModal(true)
        console.error('Falha ao enviar os dados!')
      }
    } catch(error) {
      setShowErrorModal(true)
      console.error(`Erro ao enviar os dados!: ${error}`)
    }
  }

  return (
    <section
      className="
        flex
        justify-center
        items-center
        w-full
      "
    >
      <main
        className={`
          ${montserrat.className}
          w-[400px]
          md:w-[450px]
          bg-[#1E1E1E]
          rounded-lg
          my-10
          py-8
          mx-[2%]
          text-white
          flex
          flex-col
          justify-center
          items-center
          gap-8
        `}
      >
        {showSuccessModal && <ModalSuccess />}
        {showErrorModal && <ModalError />}
        <div className="flex justify-between w-[80%]">
          <div className="flex justify-center items-center">
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
          </div>
          <div className="flex justify-center items-center">
            <h2 className="w-full text-center text-[1.3rem] md:text-3xl">NOVA INSCRIÇÃO</h2>
          </div>
          <div></div>
        </div>
        <SignupForm onSubmit={onSubmit} />
      </main>
    </section>
  )
}