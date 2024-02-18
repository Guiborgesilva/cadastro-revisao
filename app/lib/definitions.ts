export type Pessoa = {
  id: string;
  nome_pessoa: string;
  data_nascimento: string;
  sexo: string;
  lider_equipe: string;
  telefone: string;
  email: string;
  nome_mae: string;
  nome_pai: string;
  nome_contato1?: string;
  telefone_contato1?: string;
  nome_contato2?: string;
  telefone_contato2?: string;
  nome_contato3?: string;
  telefone_contato3?: string;
  forma_pagamento: string;
  created_at: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};