import clsx from 'clsx'
import { deletePessoa } from "../lib/actions"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  )
}

export function UpdatePessoa({ id, nome }: { id: string, nome: string }) {
  return (
    <Link
      href={`/controle/${id}/edit`}
      className="
      p-1
      cursor-pointer
      border
      border-black
      rounded-md
      hover:bg-black
      hover:text-white
      transition-all
      w-full
      "
    >Editar {nome.split(' ')[0]}</Link>
  )
}

export function DeletePessoa({ id }: { id: string }) {
  const deletePessoaWithId = deletePessoa.bind(null, id)
  return (
    <form action={deletePessoaWithId}>
      <button
        className="
          p-1
          cursor-pointer
          border
          border-red-600
          text-red-600
          rounded-md
        hover:bg-red-600
        hover:text-white
          transition-all
          w-24
        "
      >
        Excluir
      </button>
    </form>
  )
}