'use client'

import { mulish } from "../ui/fonts"
import Select from '@/app/ui/SelectSex'
import SelectFormLeader from "../ui/SelectLeader"
import { IMaskInput } from 'react-imask'
import { createPessoa } from '@/app/lib/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup(){
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;

    try{
      await createPessoa(form)
      toast.success('Pessoa cadastrada com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar essa pessoa, por favor tente novamente!')
    }
  }
  return (
    <section className={mulish.className}>
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
          <h1 className="text-3xl xl:text-4xl">Faça a sua inscrição!</h1>
          <form action={createPessoa} className="flex flex-col gap-2">
            <label htmlFor="nome_pessoa">Nome completo</label>
            <input
              className="text-black p-2 rounded-[10px]"
              autoFocus
              name="nome_pessoa"
              placeholder="Digite seu o nome completo"
              type="text"
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
            />
            <label htmlFor="sexo">Sexo</label>
            <Select />
            <label htmlFor="lider_equipe">Líder e Equipe</label>
            <SelectFormLeader />
            <label htmlFor="telefone">Telefone</label>
            <IMaskInput
              id="mask"
              name="telefone"
              mask="(00) 00000-0000"
              type="tel"
              placeholder="(48) 99999-9999"
              className="text-black p-2 rounded-[10px]"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="email"
              type="email"
              required
              placeholder="exemplo@exemplo.com"
            />
            <label htmlFor="nome_mae">Nome da mãe</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="nome_mae"
              type="text"
              required
              placeholder="Digite o nome da sua mãe"
            />
            <label htmlFor="nome_pai">Nome do pai</label>
            <input
              className="text-black p-2 rounded-[10px]"
              name="nome_pai"
              type="text"
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
              INSCREVER!
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}