'use client'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { createPessoa } from '@/app/lib/actions'

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
  telefone: z.string().min(1, 'Por favor, digite seu telefone!').max(15),
  email: z.string().toLowerCase().email('Por favor, digite um email válido!'),
  nome_mae: z.string()
  .min(1, 'Por favor, digite o nome da sua mãe!')
  .transform(nome_mae => {
    return nome_mae.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
}),
  nome_pai: z.string()
  .min(1, 'Por favor, digite o nome do seu pai!')
  .transform(nome_pai => {
    return nome_pai.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  forma_pagamento: z.enum([
    'Dinheiro',
    'Cartão de Débito / Crédito',
    'Pix'
  ], {
    errorMap: () => ({ message: 'Por favor, selecione uma opção!' })
  }),
  created_at: z.string()
})

export const CreatePessoa = pessoaSchema.omit({ id:true, created_at:true })

export type FormProps = {
  nome_pessoa: string,
  data_nascimento: Date,
  sexo: string,
  lider_equipe: string,
  telefone: string,
  email: string,
  nome_mae: string,
  nome_pai: string,
  forma_pagamento: string,
}

export function SignupForm() {
  
  const {
    register,
    setValue,
    watch,
    formState: {errors}
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(pessoaSchema)
  })

  const telefoneValue = watch('telefone')

  const telefoneMask = (value: string) => {
    if(!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  useEffect(() => {
    setValue("telefone", telefoneMask(telefoneValue))
  },[telefoneValue])

  
  return (
    <form action={createPessoa} className="flex flex-col gap-2">
      <label htmlFor="nome_pessoa">Nome completo</label>
      <input
        className="text-black p-2 rounded-lg"
        autoFocus
        // name="nome_pessoa"
        {...register('nome_pessoa')}
        placeholder="Digite seu o nome completo"
        type="text"
      />
      {<span>{errors.nome_pessoa?.message}</span>}
      <label htmlFor="data_nascimento">Data de nascimento</label>
      <input
        type="date"
        className="text-black p-2 rounded-lg"
        maxLength={20}
        // name="data_nascimento"
        {...register('data_nascimento')}
      />
      {<span>{errors.data_nascimento?.message}</span>}
      <label htmlFor="sexo">Sexo</label>
      <select
        id="sexo"
        defaultValue="Selecione uma opção"
        // name="sexo"
        {...register('sexo')}
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
      >
        <option defaultValue="Selecione uma opção" disabled>Selecione uma opção</option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </select>
      {<span>{errors.sexo?.message}</span>}
      <label htmlFor="lider_equipe">Líder e Equipe</label>
      <select
        id="lider_equipe"
        defaultValue="Selecione uma opção"
        // name="lider_equipe"
        {...register('lider_equipe')}
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 outline-2 text-black"
      >
        <option defaultValue="Selecione uma opção" disabled>Selecione uma opção</option>
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
        // name="telefone"
        {...register('telefone')}
        maxLength={15}
        className="text-black p-2 rounded-lg"
        placeholder="(00) 00000-0000"
      />
      {<span>{errors.telefone?.message}</span>}
      <label htmlFor="email">E-mail</label>
      <input
        className="text-black p-2 rounded-lg"
        type="email"
        // name="email"
        {...register('email')}
        placeholder="exemplo@exemplo.com"
      />
      {<span>{errors.email?.message}</span>}
      <label htmlFor="nome_mae">Nome da mãe</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        // name="nome_mae"
        {...register('nome_mae')}
        placeholder="Digite o nome da sua mãe"
      />
      {<span>{errors.nome_mae?.message}</span>}
      <label htmlFor="nome_pai">Nome do pai</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        // name="nome_pai"
        {...register('nome_pai')}
        placeholder="Digite o nome do seu pai"
      />
      {<span>{errors.nome_pai?.message}</span>}
      <label htmlFor="forma_pagamento">Forma de pagamento</label>
      <select
        className="text-black p-2 rounded-lg cursor-pointer"
        defaultValue="Selecione uma opção"
        {...register('forma_pagamento')}
      >
        <option defaultValue="Selecione uma opção" disabled>Selecione uma opção</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de Débito / Crédito">Cartão de Débito / Crédito</option>
        <option value="Pix">Pix</option>
      </select>
      {<span>{errors.forma_pagamento?.message}</span>}
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
  )
}