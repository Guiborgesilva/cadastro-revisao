import React, { useRef } from 'react'
import { deletePessoa } from "@/app/lib/actions"
import Link from "next/link"
import '@/app/ui/buttons.css' // Importe seu arquivo de estilos CS

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  id?: string
  nome?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = buttonRef.current
    if (!button) return // Verifica se buttonRef.current é null

    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add("ripple")

    button.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 600)
  }

  return (
    <button
      {...rest}
      ref={buttonRef}
      className={`ripple-button ${className}`}
      onClick={(e) => createRipple(e)}
      type="submit"
    >
      {children}
    </button>
  )
}

export function UpdatePessoa({ id, nome }: { id: string, nome: string }) {
  return (
    <Link
      href={`/controle/${id}/edit`}
    >
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
        "
      >{`Editar ${nome.split(' ')[0]}`}</Button>
    </Link>
  )
}

export function ExportPessoa({ id, nome }: { id: string, nome: string }){
  return (
    <Link
      href={`/exportacao/${id}/`}
    >
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
        "
      >{`Exportar ${nome.split(' ')[0]}`}</Button>
    </Link>
  )
}

export function DeletePessoa({ id }: { id: string }) {
  const deletePessoaWithId = deletePessoa.bind(null, id)
  return (
    <form action={deletePessoaWithId}>
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
        "
      >Excluir</Button>
    </form>
  )
}

export default Button