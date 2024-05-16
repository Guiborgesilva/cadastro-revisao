import { PencilIcon } from "@heroicons/react/24/solid"
import { deleteUsuario } from "@/app/lib/actions"
import Link from "next/link"
import Button from "@/app/ui/components/Buttons"

export function UpdateUsuario({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/usuarios/${id}/edit`}>
      <Button className="rounded border size-9 hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-300 dark:text-gray-100 border-gray-400 text-gray-800 grid place-items-center">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function DeleteUsuario({ id }: { id: string }) {
  const deleteUsuarioWithId = deleteUsuario.bind(null, id)
  return (
    <form action={deleteUsuarioWithId}>
      <Button className="rounded p-1 w-24 hover:bg-red-900 bg-red-800 text-white">
        Excluir
      </Button>
    </form>
  )
}
