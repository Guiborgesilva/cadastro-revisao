import clsx from 'clsx'
import { deletePessoa } from "@/app/lib/actions"
import Link from "next/link"
import Button from "@/app/ui/components/Buttons"

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// export function Button({ children, className, ...rest }: ButtonProps) {
//   return (
//     <button
//       {...rest}
//       className={clsx(
//         'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
//         className,
//       )}
//     >
//       {children}
//     </button>
//   )
// }

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

export default function ExportPessoa({ id, nome }: { id: string, nome: string }){
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