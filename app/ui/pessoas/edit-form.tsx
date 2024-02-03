'use client';

import { updatePessoa } from "@/app/lib/actions"
import { Pessoa } from '@/app/lib/definitions';
import Link from 'next/link';
import { useFormState } from 'react-dom'
import { mulish } from "../fonts"
import { IMaskInput } from "react-imask"

export default function EditPessoaForm({
  pessoa
}: {
  pessoa: Pessoa
}) {
  const initialState = { message: null, errors: {} }
  const updatePessoaWithId = updatePessoa.bind(null, pessoa.id)
  // const [ state, dispatch ] = useFormState(updatePessoaWithId, initialState)
  return (
    <section className={mulish.className}>
      <div className="pl-[2%] pr-[2%]" key={pessoa.id}>
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
          <h1 className="w-full text-center text-[1.2rem] md:text-4xl">Editar</h1>
          </div>
          <form action={''} className="flex flex-col gap-2">
            <label htmlFor="nome_pessoa">Nome completo</label>
            <input
              className="text-black p-2 rounded-[10px]"
              autoFocus
              name="nome_pessoa"
              placeholder="Digite seu o nome completo"
              type="text"
              defaultValue={pessoa.nome_pessoa}
              required
            />
            <label htmlFor="data_nascimento">Data de nascimento</label>
            <IMaskInput
              id="mask"
              name="data_nascimento"
              mask="00/00/0000"
              type="text"
              placeholder="dd/mm/aaaa"
              className="text-black p-2 rounded-[10px]"
              required
              defaultValue={pessoa.data_nascimento}
            />
            <label htmlFor="sexo">Sexo</label>
            <select
              id="sexo"
              name="sexo"
              defaultValue={pessoa.sexo}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
            >
              <option value="" disabled>Selecione uma opção</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </select>
            <label htmlFor="lider_equipe">Líder e Equipe</label>
            <select
              id="lider_equipe"
              name="lider_equipe"
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
            <label htmlFor="telefone">Telefone</label>
            <IMaskInput
              id="mask"
              name="telefone"
              mask="(00) 00000-0000"
              type="tel"
              defaultValue={pessoa.telefone}
              placeholder="(48) 99999-9999"
              className="text-black p-2 rounded-[10px]"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="email"
              type="email"
              defaultValue={pessoa.email}
              required
              placeholder="exemplo@exemplo.com"
            />
            <label htmlFor="nome_mae">Nome da mãe</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="nome_mae"
              type="text"
              defaultValue={pessoa.nome_mae}
              required
              placeholder="Digite o nome da sua mãe"
            />
            <label htmlFor="nome_pai">Nome do pai</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="nome_pai"
              type="text"
              defaultValue={pessoa.nome_pai}
              required
              placeholder="Digite o nome do seu pai"
            />
            <button
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
      {/* <ToastContainer /> */}
    </section>
  )
}