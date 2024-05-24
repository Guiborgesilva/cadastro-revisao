"use client"

import Link from "next/link"
import {
  CalendarIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid"
import { useFormStatus } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterRevisionista, RevisionistaForm } from "@/app/lib/utils"
import Button from "@/app/ui/components/Buttons"
import { ThreeDots } from "react-loader-spinner"

export default function Form({
  onSubmit,
  loading
}: {
  onSubmit: (data: RevisionistaForm) => Promise<void>
  loading: boolean
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RevisionistaForm>({
    resolver: zodResolver(RegisterRevisionista)
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded bg-gray-50 dark:bg-slate-700 p-4 md:p-6 shadow">
        {/* Nome completo */}
        <div className="mb-4">
          <label
            htmlFor="nome_pessoa"
            className="mb-2 block text-sm font-medium">
            Nome
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_pessoa"
                {...register("nome_pessoa")}
                type="text"
                placeholder="Digite o nome completo do revisionista"
                className="peer block w-full rounded border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-none dark:bg-slate-800"
                aria-describedby="nome_pessoa-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_pessoa-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_pessoa?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Data de nascimento */}
        <div className="mb-4">
          <label
            htmlFor="data_nascimento"
            className="mb-2 block text-sm font-medium">
            Data de nascimento
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="data_nascimento"
                {...register("data_nascimento")}
                type="date"
                className="peer block w-full rounded border border-gray-200 dark:border-none py-2 pl-10 pr-2.5 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:peer-focus:text-white dark:bg-slate-800"
                aria-describedby="data_nascimento-error"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="data_nascimento-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.data_nascimento?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Sexo */}
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">Sexo</legend>
          <div className="rounded border border-gray-200 dark:border-none bg-white dark:bg-slate-600 px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="feminino"
                  {...register("sexo")}
                  type="radio"
                  value="Feminino"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="sexo-error"
                />
                <Button
                  type="button"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-500 relative overflow-hidden isolate">
                  <label
                    htmlFor="feminino"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full text-white text-xs px-3.5 py-1.5 font-medium">
                    Feminino <UserCircleIcon className="h-4 w-4" />
                  </label>
                </Button>
              </div>
              <div className="flex items-center">
                <input
                  id="masculino"
                  {...register("sexo")}
                  type="radio"
                  value="Masculino"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="sexo-error"
                />
                <Button
                  type="button"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-sky-500 relative overflow-hidden isolate">
                  <label
                    htmlFor="masculino"
                    className="ml-2 px-3 py-1.5 flex cursor-pointer items-center gap-1.5 rounded-full text-white text-xs font-medium">
                    Masculino <UserCircleIcon className="h-4 w-4" />
                  </label>
                </Button>
              </div>
            </div>
          </div>
          <div
            id="sexo-error"
            aria-live="polite"
            aria-atomic="true">
            {
              <span className="text-red-500 text-sm">
                {errors.sexo?.message}
              </span>
            }
          </div>
        </fieldset>

        {/* Líder e equipe */}
        <div className="mb-4">
          <label
            htmlFor="lider_equipe"
            className="mb-2 block text-sm font-medium">
            Escolha um líder e sua equipe
          </label>
          <div className="relative">
            <select
              id="lider_equipe"
              {...register("lider_equipe")}
              className="peer block w-full cursor-pointer rounded border border-gray-200 dark:border-none py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:bg-slate-800"
              aria-describedby="lider_equipe-error"
              defaultValue="">
              <option
                value=""
                disabled
                className="text-gray-400">
                Selecione um líder e equipe
              </option>
              <option value="Pr. Jefferson e Pra. Cíntia | Sara Içara">
                Pr. Jefferson e Pra. Cíntia | Sara Içara
              </option>
              <option value="Maria Antônia e Vinícius | Combate">
                Maria Antônia e Vinícius | Combate
              </option>
              <option value="Nádia | Alpha">Nádia | Alpha</option>
              <option value="Guilherme e Isabel | Invencíveis">
                Guilherme e Isabel | Invencíveis
              </option>
              <option value="Gleice | Atos">Gleice | Atos</option>
            </select>
            <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 dark:peer-focus:text-white" />
          </div>
          <div
            id="lider_equipe-error"
            aria-live="polite"
            aria-atomic="true">
            {
              <span className="text-red-500 text-sm">
                {errors.lider_equipe?.message}
              </span>
            }
          </div>
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label
            htmlFor="telefone"
            className="mb-2 block text-sm font-medium">
            Telefone
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="telefone"
                {...register("telefone")}
                type="tel"
                placeholder="48999999999"
                maxLength={11}
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="telefone-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="telefone-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.telefone?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* E-mail */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium">
            E-mail
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Digite o email do revisionista"
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

        {/* Nome da mãe */}
        <div className="mb-4">
          <label
            htmlFor="nome_mae"
            className="mb-2 block text-sm font-medium">
            Nome da mãe
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_mae"
                {...register("nome_mae")}
                type="text"
                placeholder="Digite o nome da mãe do revisionista"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="nome_mae-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_mae-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_mae?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Nome do pai */}
        <div className="mb-4">
          <label
            htmlFor="nome_pai"
            className="mb-2 block text-sm font-medium">
            Nome do pai
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_pai"
                {...register("nome_pai")}
                type="text"
                placeholder="Digite o nome do pai do revisionista"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="nome_pai-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_pai-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_pai?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Forma de pagamento */}
        <div className="mb-4">
          <label
            htmlFor="forma_pagamento"
            className="mb-2 block text-sm font-medium">
            Qual a forma de pagamento do revisionista
          </label>
          <div className="relative">
            <select
              id="forma_pagamento"
              {...register("forma_pagamento")}
              className="peer block w-full cursor-pointer rounded border border-gray-200 dark:border-none
              dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
              aria-describedby="forma_pagamento-error"
              defaultValue="">
              <option
                value=""
                disabled>
                Selecione uma forma de pagamento
              </option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito / Crédito">
                Cartão de Débito / Crédito
              </option>
              <option value="Pix">Pix</option>
            </select>
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 dark:peer-focus:text-white" />
          </div>
          <div
            id="forma_pagamento-error"
            aria-live="polite"
            aria-atomic="true">
            {
              <span className="text-red-500 text-sm">
                {errors.forma_pagamento?.message}
              </span>
            }
          </div>
        </div>

        {/* Nome do primeiro contato */}
        <div className="mb-4">
          <label
            htmlFor="nome_contato1"
            className="mb-2 block text-sm font-medium">
            Nome do primeiro contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_contato1"
                {...register("nome_contato1")}
                type="text"
                placeholder="Digite o nome do primeiro contato"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="nome_contato1-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_contato1-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_contato1?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Telefone do primeiro contato */}
        <div className="mb-4">
          <label
            htmlFor="telefone_contato1"
            className="mb-2 block text-sm font-medium">
            Telefone do primeiro contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="telefone_contato1"
                {...register("telefone_contato1")}
                type="tel"
                placeholder="48999999999"
                maxLength={11}
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="telefone_contato1-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="telefone_contato1-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.telefone_contato1?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Nome do segundo contato */}
        <div className="mb-4">
          <label
            htmlFor="nome_contato2"
            className="mb-2 block text-sm font-medium">
            Nome do segundo contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_contato2"
                {...register("nome_contato2")}
                type="text"
                placeholder="Digite o nome do segundo contato"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="nome_contato2-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_contato2-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_contato2?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Telefone do segundo contato */}
        <div className="mb-4">
          <label
            htmlFor="telefone_contato2"
            className="mb-2 block text-sm font-medium">
            Telefone do segundo contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="telefone_contato2"
                {...register("telefone_contato2")}
                type="tel"
                placeholder="48999999999"
                maxLength={11}
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="telefone_contato2-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="telefone_contato2-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.telefone_contato2?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Nome do terceiro contato */}
        <div className="mb-4">
          <label
            htmlFor="nome_contato3"
            className="mb-2 block text-sm font-medium">
            Nome do terceiro contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="nome_contato3"
                {...register("nome_contato3")}
                type="text"
                placeholder="Digite o nome do terceiro contato"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="nome_contato3-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome_contato3-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome_contato3?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Telefone do terceiro contato */}
        <div className="mb-4">
          <label
            htmlFor="telefone_contato3"
            className="mb-2 block text-sm font-medium">
            Telefone do terceiro contato
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="telefone_contato3"
                {...register("telefone_contato3")}
                type="tel"
                placeholder="48999999999"
                maxLength={11}
                className="peer block w-full rounded border border-gray-200 dark:border-none
                dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="telefone_contato3-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="telefone_contato3-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.telefone_contato3?.message}
                </span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-start gap-4">
        <SubmitButton loading={loading} />
        <Link href="/dashboard/revisionistas">
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
      className="flex h-10 items-center justify-center rounded bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-900 w-[180px] text-sm font-medium text-white transition-all hover:bg-blue-400 shadow"
      aria-disabled={pending || loading}>
      {loading ? (
        <div className="grid place-items-center w-[180px] cursor-not-allowed bg-blue-500">
          <ThreeDots
            width="30"
            color="white"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>Cadastrar revisionista</>
      )}
    </Button>
  )
}
