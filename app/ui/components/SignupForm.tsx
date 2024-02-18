'use client'

import { useForm } from 'react-hook-form'
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
  telefone: z.string().min(11, 'Por favor, digite seu telefone!').max(11),
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
  nome_contato1: string,
  telefone_contato1: string,
  nome_contato2: string,
  telefone_contato2: string,
  nome_contato3: string,
  telefone_contato3: string,
  forma_pagamento: string,
}

export function SignupForm() {
  
  const {
    register,
    formState: {errors}
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(pessoaSchema)
  })
  
  return (
    <form action={createPessoa} className="flex flex-col gap-2">
      <label htmlFor="nome_pessoa">Nome completo</label>
      <input
        className="text-black p-2 rounded-lg"
        autoFocus
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
        {...register('data_nascimento')}
      />
      {<span>{errors.data_nascimento?.message}</span>}
      <label htmlFor="sexo">Sexo</label>
      <select
        id="sexo"
        defaultValue="Selecione uma opção"
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
        {...register('telefone')}
        maxLength={11}
        className="text-black p-2 rounded-lg"
        placeholder="(00) 00000-0000"
      />
      {<span>{errors.telefone?.message}</span>}
      <label htmlFor="email">E-mail</label>
      <input
        className="text-black p-2 rounded-lg"
        type="email"
        {...register('email')}
        placeholder="exemplo@exemplo.com"
      />
      {<span>{errors.email?.message}</span>}
      <label htmlFor="nome_mae">Nome da mãe</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        {...register('nome_mae')}
        placeholder="Digite o nome da sua mãe"
      />
      {<span>{errors.nome_mae?.message}</span>}
      <label htmlFor="nome_pai">Nome do pai</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
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
      <label htmlFor="nome_contato1">Nome do primeiro contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        {...register('nome_contato1')}
        placeholder="Digite o nome do primeiro contato"
      />
      <label htmlFor="telefone_contato1">Telefone do primeiro contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="tel"
        {...register('telefone_contato1')}
        placeholder="(00) 00000-0000"
        maxLength={11}
      />
      <label htmlFor="nome_contato2">Nome do segundo contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        {...register('nome_contato2')}
        placeholder="Digite o nome do segundo contato"
      />
      <label htmlFor="telefone_contato2">Telefone do segundo contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="tel"
        {...register('telefone_contato2')}
        placeholder="(00) 00000-0000"
        maxLength={11}
      />
      <label htmlFor="nome_contato3">Nome do terceiro contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        {...register('nome_contato3')}
        placeholder="Digite o nome do terceiro contato"
      />
      <label htmlFor="telefone_contato3">Telefone do terceiro contato</label>
      <input
        className="text-black p-2 rounded-lg"
        type="tel"
        {...register('telefone_contato3')}
        placeholder="(00) 00000-0000"
        maxLength={11}
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
  )
}