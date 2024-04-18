'use client'

import { roboto } from '@/app/ui/fonts'
import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import Button from '@/app/ui/components/Buttons'
import { useFormState, useFormStatus } from 'react-dom'
import Link from "next/link"
import { useForm } from "react-hook-form"
import { UserForm } from "@/app/cadastro/page"
import { RegisterUser } from "@/app/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"

export function SignUpUserForm({
  onSubmit
}: {
  onSubmit: (data: UserForm) => Promise<void>
}) {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<UserForm>({
    resolver: zodResolver(RegisterUser)
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 animate-up">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${roboto.className} mb-3 text-2xl`}>
          Preencha os dados abaixo para se cadastrar!
        </h1>
        <div className="w-full">
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nome"
            >
              Nome
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nome"
                type="text"
                {...register('nome')}
                placeholder="Digite seu nome"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {<span className="text-red-500">{errors.nome?.message}</span>}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                {...register('email')}
                placeholder="Digite seu email"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {<span className="text-red-500">{errors.email?.message}</span>}
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="senha"
                type="password"
                {...register('senha')}
                placeholder="Digite sua senha"
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {<span className="text-red-500">{errors.senha?.message}</span>}
          </div>
        </div>
        <button
          type="submit"
          className="
            w-full
            py-1.5
            mt-5
            bg-black
            text-white
          "
        >Cadastrar</button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* ERROS */}
        </div>
        <Link
          href={'/login'}
          >
            <Button
              className="
                w-full
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1.5
              "
            >Já possuo conta</Button>
          </Link>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        
      </div>
    </form>
  )
}

// function SignupButton() {
//   const { pending } = useFormStatus()

//   return (
//     <Button
//       className="
//       mt-4
//       w-full
//       bg-black
//       text-white
//       py-1.5
//       hover:bg-black/85
//     "
//       type="submit"
//       aria-disabled={pending}
//     >
//       Cadastrar
//     </Button>
//   )
// }