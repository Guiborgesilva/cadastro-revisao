'use client'

import Image from "next/image"
import { SignUpUserForm } from "@/app/modules/auth/components/signup-form"
import { useForm } from "react-hook-form"
import { RegisterUser } from "@/app/lib/utils"
import { z } from "zod"
import { useState } from "react"
import { ModalCreateUserError, ModalCreateUserSuccess } from "../ui/components/ModalMessages"

export type UserForm = z.infer<typeof RegisterUser>
 
export default function Page() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  async function createAccount(data: UserForm) {
    try{
      const response = await fetch('/api/create-user', {
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
        alert('Usuário cadastrado com sucesso!')
      } else {
        setShowErrorModal(true)
        alert('Erro ao cadastrar usuário!')
        console.error('Falha ao enviar os dados!')
      }
    } catch(error) {
      setShowErrorModal(true)
      alert('Erro ao cadastrar usuário!')
      console.error(`Erro ao enviar os dados!: ${error}`)
    }
  }

  return (
    <main 
      className="
        flex
        items-center
        justify-center
        w-full
      ">
      {showSuccessModal && <ModalCreateUserSuccess />}
      {showErrorModal && <ModalCreateUserError />}
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-pb-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-black p-3 md:h-36 animate-up">
          <div className="w-32 text-white md:w-36">
            <div>
              <Image
                width={260}
                height={65}
                src="/logoSaraIcara.png"
                alt="Logo da Igreja Sara de Içara"
              />
            </div>
          </div>
        </div>
        <SignUpUserForm onSubmit={createAccount} />
      </div>
    </main>
  );
}