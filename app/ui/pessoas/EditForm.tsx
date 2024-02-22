'use client'

import { updatePessoa } from "@/app/lib/actions"
import { Pessoa } from '@/app/lib/definitions'
import Link from 'next/link'
import { mulish } from "../fonts"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { normalizePhoneNumber } from '../../lib/utils'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const pessoaSchema = z.object({
  id: z.string(),
  nome_pessoa: z.string()
    .min(1, 'Por favor, digite seu nome!')
    .transform(nome_pessoa => {
      return nome_pessoa.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
  }),
  data_nascimento: z.coerce.date().min(new Date('1900-01-01'), {
    message: 'Por favor, digite uma data de nascimento válida'
  }),
  sexo: z.enum(['Feminino', 'Masculino'], {
    errorMap: () => ({ message: 'Por favor. selecione uma opção!' })
  }),
  lider_equipe: z.enum([
    'Pr. Jefferson e Pra. Cíntia | Sara Içara',
    'Maria Antônia e Vinícius | Combate',
    'Nádia | Alpha',
    'Guilherme e Isabel | Invencíveis',
    'Gleice | Atos'
  ], {
    errorMap: () => ({ message: 'Por favor, selecione uma opção!' })
  }),
  telefone: z.string().min(11, 'Por favor, digite seu telefone!').max(11),
  email: z.string().toLowerCase().email('Por favor, digite um email válido!'),
  nome_mae: z.string().min(1, 'Por favor, digite o nome da sua mãe!'),
  nome_pai: z.string().min(1, 'Por favor, digite o nome do seu pai!'),
  nome_contato1: z.string(),
  telefone_contato1: z.string(),
  nome_contato2: z.string(),
  telefone_contato2: z.string(),
  nome_contato3: z.string(),
  telefone_contato3: z.string(),
  forma_pagamento: z.enum([
    'Dinheiro',
    'Cartão de Débito / Crédito',
    'Pix'
  ]),
  created_at: z.date()
})

export type FormProps = {
  nome_pessoa: string,
  data_nascimento: string,
  sexo: string,
  lider_equipe: string,
  telefone: string,
  email: string,
  nome_mae: string,
  nome_pai: string,
  nome_contato1: string,
  telefone_contato1: string,
  nome_contato2: string,
  telefone_contato2: string,
  nome_contato3: string,
  telefone_contato3: string,
  forma_pagamento: string
}

export default function EditPessoaForm({
  pessoa
}: {
  pessoa: Pessoa
}) {
  
  const {
    register,
    formState: {errors}
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(pessoaSchema)
  })

  const updatePessoaWithId = updatePessoa.bind(null, pessoa.id)
  const editSuccess = () => toast.success('Pessoa editada com sucesso!')
  
  return (
    <section className={`${mulish.className}`} key={pessoa.id}>
      <div className="pl-[2%] pr-[2%]">
        <div className="
          flex
          justify-center
          flex-col
          mr-auto
          ml-auto
          text-white
          gap-10
          rounded-[10px]
          p-10
          mt-10
          mb-10
          bg-[#1E1E1E]
          w-[320px]
          sm:w-[400px]
          xl:w-[562px]
          shadow-2xl
          "
        >
          <div className="flex items-center md:gap-4">
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
          <h1 className="w-full text-center text-[1.5rem] md:text-4xl">Edite os dados</h1>
          </div>
          <form action={updatePessoaWithId} className="flex flex-col gap-2">
            <input type="hidden" name="id" value={pessoa.id} />
            <label htmlFor="nome_pessoa">Nome completo</label>
            <input
              className="text-black p-2 rounded-[10px]"
              autoFocus
              required
              {...register('nome_pessoa')}
              placeholder="Digite seu o nome completo"
              type="text"
              defaultValue={pessoa.nome_pessoa}
            />
            {<span>{errors.nome_pessoa?.message}</span>}
            <label htmlFor="data_nascimento">Data de nascimento</label>
            <input
              type="date"
              required
              className="text-black p-2 rounded-lg"
              maxLength={10}
              {...register('data_nascimento')}
              defaultValue={pessoa.data_nascimento}
            />
            {<span>{errors.data_nascimento?.message}</span>}
            <label htmlFor="sexo">Sexo</label>
            <select
              id="sexo"
              required
              {...register('sexo')}
              defaultValue={pessoa.sexo}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
            >
              <option value="" disabled>Selecione uma opção</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </select>
            {<span>{errors.sexo?.message}</span>}
            <label htmlFor="lider_equipe">Líder e Equipe</label>
            <select
              id="lider_equipe"
              required
              {...register('lider_equipe')}
              defaultValue={pessoa.lider_equipe}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
            >
              <option value="" disabled>Selecione uma opção</option>
              <option
                value="Pr. Jefferson e Pra. Cíntia | Sara Içara">
                  Pr. Jefferson e Pra. Cíntia | Sara Içara
              </option>
              <option
                value="Maria Antônia e Vinícius | Combate">
                  Maria Antônia e Vinícius | Combate
              </option>
              <option
                value="Nádia | Alpha">
                  Nádia | Alpha
              </option>
              <option
                value="Guilherme e Isabel | Invencíveis">
                  Guilherme e Isabel | Invencíveis
              </option>
              <option
                value="Gleice | Atos">
                  Gleice | Atos
              </option>
            </select>
            {<span>{errors.lider_equipe?.message}</span>}
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              required
              {...register('telefone')}
              maxLength={16}
              className="text-black p-2 rounded-lg"
              placeholder="(00) 00000-0000"
              defaultValue={normalizePhoneNumber(pessoa.telefone)}
            />
            {<span>{errors.telefone?.message}</span>}
            <label htmlFor="email">E-mail</label>
            <input
              className="text-black p-2 rounded-lg"
              type="email"
              required
              {...register('email')}
              placeholder="exemplo@exemplo.com"
              defaultValue={pessoa.email}
            />
            {<span>{errors.email?.message}</span>}
            <label htmlFor="nome_mae">Nome da mãe</label>
            <input
              className="text-black p-2 rounded-[10px]"
              {...register('nome_mae')}
              type="text"
              defaultValue={pessoa.nome_mae}
              required
              placeholder="Digite o nome da sua mãe"
            />
            {<span>{errors.nome_mae?.message}</span>}
            <label htmlFor="nome_pai">Nome do pai</label>
            <input
              className="text-black p-2 rounded-[10px]"
              {...register('nome_pai')}
              required
              type="text"
              defaultValue={pessoa.nome_pai}
              placeholder="Digite o nome do seu pai"
            />
            {<span>{errors.nome_pai?.message}</span>}
            <label htmlFor="forma_pagamento">Forma de pagamento</label>
            <select
              {...register('forma_pagamento')}
              required
              defaultValue={pessoa.forma_pagamento || 'Selecione uma opção'}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
            >
              <option defaultValue="Selecione uma opção" disabled>Selecione uma opção</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito / Crédito">Cartão de Débito / Crédito</option>
              <option value="Pix">Pix</option>
            </select>
            {<span>{errors.forma_pagamento?.message}</span>}
            <label htmlFor="nome_contato1">Nome do primeiro contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="text"
              {...register('nome_contato1')}
              placeholder="Digite o nome do primeiro contato"
              defaultValue={pessoa.nome_contato1 || ''}
            />
            <label htmlFor="telefone_contato1">Telefone do primeiro contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="tel"
              {...register('telefone_contato1')}
              placeholder="(00) 00000-0000"
              defaultValue={normalizePhoneNumber(pessoa.telefone_contato1) || ''}
              maxLength={16}
            />
            <label htmlFor="nome_contato2">Nome do segundo contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="text"
              {...register('nome_contato2')}
              placeholder="Digite o nome do segundo contato"
              defaultValue={pessoa.nome_contato2 || ''}
            />
            <label htmlFor="telefone_contato2">Telefone do segundo contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="tel"
              {...register('telefone_contato2')}
              placeholder="(00) 00000-0000"
              defaultValue={normalizePhoneNumber(pessoa.telefone_contato2) || ''}
              maxLength={16}
            />
            <label htmlFor="nome_contato3">Nome do terceiro contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="text"
              {...register('nome_contato3')}
              placeholder="Digite o nome do terceiro contato"
              defaultValue={pessoa.nome_contato3 || ''}
            />
            <label htmlFor="telefone_contato3">Telefone do terceiro contato</label>
            <input
              className="text-black p-2 rounded-lg"
              type="tel"
              {...register('telefone_contato3')}
              placeholder="(00) 00000-0000"
              defaultValue={normalizePhoneNumber(pessoa.telefone_contato3) || ''}
              maxLength={11}
            />
            <button
              onClick={editSuccess}
              className="
                p-2
                mt-3
                rounded-[10px]
                hover:bg-white
                hover:text-black
                transition
                bw
              "
              type="submit"
            >
              SALVAR ALTERAÇÕES
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}