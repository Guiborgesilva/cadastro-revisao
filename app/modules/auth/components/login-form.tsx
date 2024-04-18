'use client'

import { roboto } from '@/app/ui/fonts'
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import Button from '@/app/ui/components/Buttons'
import { useFormState, useFormStatus } from 'react-dom'
import Link from "next/link"
import { login } from "@/app/modules/auth/actions/auth-actions"

export function LoginForm() {

  return (
    <form className="space-y-3 animate-up" action={login}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${roboto.className} mb-3 text-2xl`}>
          Por favor, faça login para continuar!
        </h1>
        <div className="w-full">
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
                name="email"
                placeholder="Digite seu email"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
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
                name="senha"
                placeholder="Digite sua senha"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* ERROS */}
        </div>
        <Link
          href={'/cadastro'}
          >
            <Button
              className="
                w-full
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1.5
              "
            >Criar conta</Button>
          </Link>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        
      </div>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      className="
      mt-4
      w-full
      bg-black
      text-white
      py-1.5
      hover:bg-black/85
    "
      aria-disabled={pending}
    >
      Log in
    </Button>
  )
}