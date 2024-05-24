"use client"

import { roboto } from "@/app/ui/fonts"
import { useState } from "react"
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid"
import Button from "@/app/ui/login/Button"
import { useFormStatus } from "react-dom"
import { authenticate } from "@/app/lib/actions"
import { Ripple } from "react-ripple-click"
import { ThreeDots } from "react-loader-spinner"
import toast, { Toaster } from "react-hot-toast"

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Impedir o envio padrão do formulário
    const formData = new FormData(event.currentTarget)

    try {
      setErrorMessage("")
      setLoading(true)

      if (!formData.get("email") || !formData.get("password")) {
        setErrorMessage("Por favor, preencha todos os campos!")
        return
      }

      const result = await authenticate(undefined, formData)

      switch (result) {
        case "success":
          toast.success("Log in efetuado!")
          break
        case "invalid":
          toast.error("Verifique seus dados!")
          setErrorMessage("Credenciais inválidas!")
          break
        case "error":
          toast.error("Algo deu errado!")
          break
        default:
          break
      }
    } catch (error) {
      console.error(error)
      setErrorMessage("Verifique suas credenciais")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-3 animate-up">
      <Toaster />
      <div className="flex-1 rounded text-black dark:text-white dark:bg-gray-800 bg-gray-50 px-6 pb-4 pt-8 shadow">
        <h1 className={`${roboto.className} mb-3 text-2xl`}>
          Por favor, faça login para continuar!
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
              htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded border dark:border-none border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-900 dark:text-white"
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                autoFocus
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:peer-focus:text-white peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
              htmlFor="password">
              Senha
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded border dark:border-none border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-900 dark:text-white"
                id="senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:peer-focus:text-white peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton loading={loading} />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}

interface LoginButtonProps {
  loading: boolean
}

function LoginButton({ loading }: LoginButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="mt-4 w-full"
      disabled={pending || loading}>
      <Ripple />
      {loading ? (
        <div className="grid place-items-center w-full cursor-not-allowed">
          <ThreeDots
            width="30"
            color="white"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          Log in
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </>
      )}
    </Button>
  )
}
