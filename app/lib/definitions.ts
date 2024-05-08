export type Revisionista = {
  id: string
  nome_pessoa: string
  data_nascimento: string
  sexo: string
  lider_equipe: string
  telefone: string
  email: string
  nome_mae: string
  nome_pai: string
  forma_pagamento: string
  nome_contato1?: string
  telefone_contato1?: string
  nome_contato2?: string
  telefone_contato2?: string
  nome_contato3?: string
  telefone_contato3?: string
  created_at: string
}

export type Visitante = {
  id: string
  nome: string
  data_nascimento: string
  sexo: string
  telefone: string
  endereco: string
  bairro: string
  quem_convidou: string
  como_conheceu: string
  data_visita: string
  tipo_culto: string
  created_at: string
}

export type Usuario = {
  id: string
  name: string
  email: string
  password: string
  created_at: string
}

export type UltimosRevisionistas = {
  id: string
  nome_pessoa: string
  lider_equipe: string
}

export type UltimosVisitantes = {
  id: string
  nome: string
  bairro: string
}
