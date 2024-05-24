"use client"

import Link from "next/link"
import {
  UserCircleIcon,
  LockClosedIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid"
import { useFormStatus } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterUser, UserForm } from "@/app/lib/utils"
import Button from "@/app/ui/components/Buttons"
import { ThreeDots } from "react-loader-spinner"

export default function Form({
  onSubmit,
  loading
}: {
  onSubmit: (data: UserForm) => Promise<void>
  loading: boolean
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserForm>({
    resolver: zodResolver(RegisterUser)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded bg-gray-50 dark:bg-slate-700 p-4 md:p-6 shadow">
        {/* Nome completo */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium">
            Nome
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Digite o nome completo do usuário"
                className="peer block w-full rounded border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-none dark:bg-slate-800"
                aria-describedby="name-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="name-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.name?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Digite o email do usuário"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="email-error"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="email-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.email?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium">
            Senha
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Digite a senha do usuário"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="email-error"
              />
              <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="password-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.password?.message}
                </span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-start gap-4">
        <SubmitButton loading={loading} />
        <Link href="/dashboard/usuarios">
          <Button className="flex h-10 items-center rounded bg-gray-100 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-white px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-200 shadow">
            Cancelar
          </Button>
        </Link>
      </div>
    </form>
  )
}

interface SubmitButtonProps {
  loading: boolean
}

function SubmitButton({ loading }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="flex h-10 items-center justify-center rounded bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-900 w-[152px] text-sm font-medium text-white transition-all hover:bg-blue-400 shadow"
      aria-disabled={pending || loading}>
      {loading ? (
        <div className="grid place-items-center w-[152px] cursor-not-allowed bg-blue-500">
          <ThreeDots
            width="30"
            color="white"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>Cadastrar usuário</>
      )}
    </Button>
  )
}
