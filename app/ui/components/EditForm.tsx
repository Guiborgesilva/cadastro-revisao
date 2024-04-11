'use client'

import { Pessoa } from '@/app/lib/definitions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { capitalizarNome, normalizePhoneNumber, RegisterPessoa } from '@/app/lib/utils'
import { PessoaForm } from "@/app/ui/components/SignupForm"
import Button from "@/app/ui/components/Buttons"
import { montserratB } from "@/app/ui/fonts"

export default function EditPessoaForm({
  pessoa,
  onSubmit
}: {
  pessoa: Pessoa,
  onSubmit: (data: PessoaForm) => Promise<void>
}) {
  
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<PessoaForm>({
    resolver: zodResolver(RegisterPessoa)
  })

  return (        
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        flex
        flex-col
        gap-2
        w-[80%]
      "
    >
      <label htmlFor="nome_pessoa">Nome completo</label>
      <input
        className="text-black p-2 rounded-sm"
        {...register('nome_pessoa')}
        placeholder="Digite seu o nome completo"
        type="text"
        defaultValue={capitalizarNome(pessoa.nome_pessoa)}
      />
      {<span className="text-red-500">{errors.nome_pessoa?.message}</span>}
      <label htmlFor="data_nascimento">Data de nascimento</label>
      <input
        type="date"
        className="text-black p-2 rounded-sm"
        maxLength={10}
        {...register('data_nascimento')}
        defaultValue={pessoa.data_nascimento}
      />
      {<span className="text-red-500">{errors.data_nascimento?.message}</span>}
      <label htmlFor="sexo">Sexo</label>
      <select
        id="sexo"
        {...register('sexo')}
        defaultValue={pessoa.sexo}
        className="peer block w-full cursor-pointer rounded-sm border border-gray-200 p-2 outline-2 text-black"
      >
        <option value="" disabled>Selecione uma opção</option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </select>
      {<span className="text-red-500">{errors.sexo?.message}</span>}
      <label htmlFor="lider_equipe">Líder e Equipe</label>
      <select
        id="lider_equipe"
        {...register('lider_equipe')}
        defaultValue={pessoa.lider_equipe}
        className="peer block w-full cursor-pointer rounded-sm border border-gray-200 p-2 outline-2 text-black"
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
      {<span className="text-red-500">{errors.lider_equipe?.message}</span>}
      <label htmlFor="telefone">Telefone</label>
      <input
        type="tel"
        {...register('telefone')}
        maxLength={11}
        className="text-black p-2 rounded-sm"
        placeholder="48999999999"
        defaultValue={pessoa.telefone}
      />
      {<span className="text-red-500">{errors.telefone?.message}</span>}
      <label htmlFor="email">E-mail</label>
      <input
        className="text-black p-2 rounded-sm"
        type="email"
        {...register('email')}
        placeholder="exemplo@exemplo.com"
        defaultValue={pessoa.email}
      />
      {<span className="text-red-500">{errors.email?.message}</span>}
      <label htmlFor="nome_mae">Nome da mãe</label>
      <input
        className="text-black p-2 rounded-sm"
        {...register('nome_mae')}
        type="text"
        defaultValue={pessoa.nome_mae}
        placeholder="Digite o nome da sua mãe"
      />
      {<span className="text-red-500">{errors.nome_mae?.message}</span>}
      <label htmlFor="nome_pai">Nome do pai</label>
      <input
        className="text-black p-2 rounded-sm"
        {...register('nome_pai')}
        type="text"
        defaultValue={pessoa.nome_pai}
        placeholder="Digite o nome do seu pai"
      />
      {<span className="text-red-500">{errors.nome_pai?.message}</span>}
      <label htmlFor="forma_pagamento">Forma de pagamento</label>
      <select
        {...register('forma_pagamento')}
        defaultValue={pessoa.forma_pagamento || 'Selecione uma opção'}
        className="peer block w-full cursor-pointer rounded-sm border border-gray-200 p-2 outline-2 text-black"
      >
        <option defaultValue="Selecione uma opção" disabled>Selecione uma opção</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de Débito / Crédito">Cartão de Débito / Crédito</option>
        <option value="Pix">Pix</option>
      </select>
      {<span className="text-red-500">{errors.forma_pagamento?.message}</span>}
      <label htmlFor="nome_contato1">Nome do primeiro contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="text"
        {...register('nome_contato1')}
        placeholder="Digite o nome do primeiro contato"
        defaultValue={pessoa.nome_contato1 || ''}
      />
      <label htmlFor="telefone_contato1">Telefone do primeiro contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="tel"
        {...register('telefone_contato1')}
        placeholder="48999999999"
        defaultValue={pessoa.telefone_contato1 || ''}
        maxLength={11}
      />
      <label htmlFor="nome_contato2">Nome do segundo contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="text"
        {...register('nome_contato2')}
        placeholder="Digite o nome do segundo contato"
        defaultValue={pessoa.nome_contato2 || ''}
      />
      <label htmlFor="telefone_contato2">Telefone do segundo contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="tel"
        {...register('telefone_contato2')}
        placeholder="48999999999"
        defaultValue={pessoa.telefone_contato2 || ''}
        maxLength={11}
      />
      <label htmlFor="nome_contato3">Nome do terceiro contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="text"
        {...register('nome_contato3')}
        placeholder="Digite o nome do terceiro contato"
        defaultValue={pessoa.nome_contato3 || ''}
      />
      <label htmlFor="telefone_contato3">Telefone do terceiro contato</label>
      <input
        className="text-black p-2 rounded-sm"
        type="tel"
        {...register('telefone_contato3')}
        placeholder="48999999999"
        defaultValue={pessoa.telefone_contato3 || ''}
        maxLength={11}
      />
      <Button
        content="ATUALIZAR"
        className={`
          ${montserratB.className}
          p-2
          mt-4
          rounded-sm
          font-bold
          text-black
          bg-white
          hover:bg-white/85
          hover:text-black
          transition-all
        `}
      />
    </form>
  )
}