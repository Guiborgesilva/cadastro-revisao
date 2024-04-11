'use client'

import { fetchPessoaById } from '@/app/lib/actions'
import { useEffect, useState } from "react"
import { InputSkeleton } from "@/app/ui/components/Skeletons"
import { ModalError, ModalEditSuccess } from "@/app/ui/components/ModalMessages"
import { PessoaForm } from "@/app/ui/components/SignupForm"
import EditForm from '@/app/ui/components/EditForm'
import Link from "next/link"
import { Pessoa } from "@/app/lib/definitions"
import { montserrat } from "@/app/ui/fonts"


export default function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [showEditSuccessModal, setShowEditSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [pessoa, setPessoa] = useState<Pessoa | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pessoaData = await fetchPessoaById(id)
        setPessoa(pessoaData)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
        setShowErrorModal(true)
      }
    };
  
    fetchData();
  }, [id])

  const onSubmit = async (data: PessoaForm) => {
    try{
      const response = await fetch(`/api/update-pessoa/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if(response.ok) {
        setShowEditSuccessModal(true)
        const responseData = await response.json()
        console.log('Dados atualizados com sucesso!', responseData)
      } else {
        setShowErrorModal(true)
        console.error('Falha ao atualizar os dados!')
      }
    } catch(error) {
      setShowErrorModal(true)
      console.error(`Erro ao atualizar os dados!: ${error}`)
    }
  }

  let contentToRender

  if(pessoa === null) {
    contentToRender = (
      <form className="flex flex-col gap-2 w-[80%]">
        {[...Array(15)].map((_, index) => (
          <InputSkeleton key={index} />
        ))}
        <button
          className="
            w-full
            h-10
            rounded-sm
            transition-all
            border
            border-white
            nameLine
          "
        ></button>
      </form>
    )
  } else {
    contentToRender = (
      <EditForm pessoa={pessoa} onSubmit={onSubmit} />
    )
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
          animate-up
        `}
      >
        {showEditSuccessModal && <ModalEditSuccess/>}
        {showErrorModal && <ModalError/>}
        <div className="flex justify-between w-[80%]">
          <div className="flex justify-center items-center">
            <Link href={{ pathname:'/controle' }}>
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
            <h2 className="w-full text-center text-[1.3rem] md:text-3xl">EDITAR PESSOA</h2>
          </div>
          <div></div>
        </div>
        {contentToRender}
      </main>
    </section>
  )
}