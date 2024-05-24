"use client"

import Link from "next/link"
import {
  BuildingLibraryIcon,
  CalendarIcon,
  GlobeAmericasIcon,
  PhoneIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid"
import { useFormStatus } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterVisitante, VisitanteForm } from "@/app/lib/utils"
import Button from "@/app/ui/components/Buttons"
import { ThreeDots } from "react-loader-spinner"

export default function Form({
  onSubmit,
  loading
}: {
  onSubmit: (data: VisitanteForm) => Promise<void>
  loading: boolean
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<VisitanteForm>({
    resolver: zodResolver(RegisterVisitante)
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
                {...register("nome")}
                type="text"
                placeholder="Digite o nome completo do visitante"
                className="peer block w-full rounded border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-none dark:bg-slate-800"
                aria-describedby="nome_pessoa-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="nome-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.nome?.message}
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
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-500">
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
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-sky-500">
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

        {/* Endereço */}
        <div className="mb-4">
          <label
            htmlFor="endereco"
            className="mb-2 block text-sm font-medium">
            Endereço
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="endereco"
                {...register("endereco")}
                type="text"
                placeholder="Digite o endereço do visitante"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="email-error"
              />
              <GlobeAmericasIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="endereco-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.endereco?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Bairro */}
        <div className="mb-4">
          <label
            htmlFor="bairro"
            className="mb-2 block text-sm font-medium">
            Bairro
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="bairro"
                {...register("bairro")}
                type="text"
                placeholder="Digite o nome do bairro do visitante"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="bairro-error"
              />
              <GlobeAmericasIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="bairro-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.bairro?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Quem convidou */}
        <div className="mb-4">
          <label
            htmlFor="quem_convidou"
            className="mb-2 block text-sm font-medium">
            Quem convidou
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="quem_convidou"
                {...register("quem_convidou")}
                type="text"
                placeholder="Digite o nome de quem convidou o visitante"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="quem_convidou-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="quem_convidou-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.quem_convidou?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Como conheceu a Sara Nossa Terra */}
        <div className="mb-4">
          <label
            htmlFor="como_conheceu"
            className="mb-2 block text-sm font-medium">
            Como conheceu a Sara Nossa Terra
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <textarea
                id="como_conheceu"
                {...register("como_conheceu")}
                placeholder="Digite como o visitante conheceu a Sara Nossa Terra"
                className="peer block w-full rounded border border-gray-200 dark:border-none
                 dark:placeholder:text-gray-400 dark:text-white p-4 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
                aria-describedby="como_conheceu-error"></textarea>
            </div>
            <div
              id="como_conheceu-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.como_conheceu?.message}
                </span>
              }
            </div>
          </div>
        </div>

        {/* Tipo de culto */}
        <div className="mb-4">
          <label
            htmlFor="tipo_culto"
            className="mb-2 block text-sm font-medium">
            Tipo de culto
          </label>
          <div className="relative">
            <select
              id="tipo_culto"
              {...register("tipo_culto")}
              className="peer block w-full cursor-pointer rounded border border-gray-200 dark:border-none
               dark:placeholder:text-gray-400 dark:text-white py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-slate-800"
              aria-describedby="tipo_culto-error"
              defaultValue="">
              <option
                value=""
                disabled
                className="text-gray-400">
                Selecione um tipo de culto
              </option>
              <option value="Culto de Campanha | Quinta-feira">
                Culto de Campanha | Quinta-feira
              </option>
              <option value="Culto das Mulheres | Sexta-feira">
                Culto das Mulheres | Sexta-feira
              </option>
              <option value="Arena | Sábado">Arena | Sábado</option>
              <option value="Culto da Família | Domingo">
                Culto da Família | Domingo
              </option>
            </select>
            <BuildingLibraryIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 dark:peer-focus:text-white" />
          </div>
          <div
            id="tipo_culto-error"
            aria-live="polite"
            aria-atomic="true">
            {
              <span className="text-red-500 text-sm">
                {errors.tipo_culto?.message}
              </span>
            }
          </div>
        </div>

        {/* Data da visita */}
        <div className="mb-4">
          <label
            htmlFor="data_visita"
            className="mb-2 block text-sm font-medium">
            Data da visita
          </label>
          <div className="relative mt-2 rounded">
            <div className="relative">
              <input
                id="data_visita"
                {...register("data_visita")}
                type="date"
                className="peer block w-full rounded border border-gray-200 dark:border-none py-2 pl-10 pr-2.5 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:peer-focus:text-white dark:bg-slate-800"
                aria-describedby="data_visita-error"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            </div>
            <div
              id="data_visita-error"
              aria-live="polite"
              aria-atomic="true">
              {
                <span className="text-red-500 text-sm">
                  {errors.data_visita?.message}
                </span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-start gap-4">
        <SubmitButton loading={loading} />
        <Link href="/dashboard/visitantes">
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
      className="flex h-10 items-center justify-center rounded bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-900 w-[160px] text-sm font-medium text-white transition-all hover:bg-blue-400 shadow"
      aria-disabled={pending || loading}>
      {loading ? (
        <div className="grid place-items-center w-[160px] cursor-not-allowed bg-blue-500">
          <ThreeDots
            width="30"
            color="white"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>Cadastrar visitante</>
      )}
    </Button>
  )
}
