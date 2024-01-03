'use client'

import { mulish } from "../ui/fonts"
import Select from '@/app/ui/SelectSex'
import SelectFormLeader from "../ui/SelectLeader"
import { IMaskInput } from 'react-imask'

export default function Signup(){
  

  return (
    <>
    <section className={mulish.className}>
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
        xl:mt-8
        xl:mb-8
        mt-10
        mb-10
        bg-[#1E1E1E]
        max-w-[562px]
        "
      >
        <h1 className="text-3xl xl:text-4xl">Faça a sua inscrição!</h1>
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="nome">Nome completo</label>
          <input
            className="text-black p-2 rounded-[10px]"
            autoFocus
            name="nome"
            placeholder="Digite seu o nome completo"
            type="text"
            required
          />
          <label htmlFor="data">Data de nascimento</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="data"
            type="date"
            required
          />
          <label htmlFor="sexo">Sexo</label>
          <Select />
          <label htmlFor="lider-e-equipe">Líder e Equipe</label>
          <SelectFormLeader />
          <label htmlFor="telefone">Telefone</label>
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="(48) 99999-9999"
            className="text-black p-2 rounded-[10px]"
          />
          <label htmlFor="email">E-mail</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="email"
            type="email"
            required
            placeholder="exemplo@exemplo.com"
          />
          <label htmlFor="nome-da-mae">Nome da mãe</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="nome-da-mae"
            type="text"
            required
            placeholder="Digite o nome da sua mãe"
          />
          <label htmlFor="nome-do-pai">Nome do pai</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="nome-do-pai"
            type="text"
            required
            placeholder="Digite o nome do seu pai"
          />
          <button className="
            p-2
            mt-3
            rounded-[10px]
            hover:bg-white
            hover:text-black
            transition
            bw
            "
          >
            INSCREVER!
          </button>
        </form>
      </div>
    </section>
    </>
  )
}