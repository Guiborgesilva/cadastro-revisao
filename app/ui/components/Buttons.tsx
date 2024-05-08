import React from "react"
import { deleteRevisionista } from "@/app/lib/actions"
import Link from "next/link"
import { Ripple } from "react-ripple-click"
import "react-ripple-click/dist/index.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  id?: string
  nome?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`relative overflow-hidden isolate ${className}`}>
      <Ripple />
      {children}
    </button>
  )
}

export function UpdatePessoa({ id, nome }: { id: string; nome: string }) {
  return (
    <Link href={`/dashboard/controle/${id}/edit`}>
      <Button
        className="
          text-white
          border
          bg-black
          hover:bg-black/90
          hover:text-white
          transition-all
          w-full
          py-1
          rounded
          flex
          items-center
          justify-center
        ">{`Editar ${
        nome.split(" ")[0]
      }`}</Button>
    </Link>
  )
}

export function ExportPessoa({ id, nome }: { id: string; nome: string }) {
  return (
    <Link href={`/exportacao/${id}/`}>
      <Button
        className="
          text-white
          border
          bg-black
          hover:bg-black/90
          hover:text-white
          transition-all
          w-full
          py-1
          rounded
          flex
          items-center
          justify-center
        ">{`Exportar ${
        nome.split(" ")[0]
      }`}</Button>
    </Link>
  )
}

export function DeletePessoa({ id }: { id: string }) {
  const deleteRevisionistaWithId = deleteRevisionista.bind(null, id)
  return (
    <form action={deleteRevisionistaWithId}>
      <Button
        type="submit"
        className="
          p-1
          cursor-pointer
          border
          bg-red-600
          text-white
          rounded
          hover:bg-red-800
          hover:text-white
          transition-all
          w-24
        ">
        Excluir
      </Button>
    </form>
  )
}

export default Button
