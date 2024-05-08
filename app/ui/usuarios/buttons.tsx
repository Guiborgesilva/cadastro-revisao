import { PencilIcon } from "@heroicons/react/24/solid"
import { deleteUsuario } from "@/app/lib/actions"
import Link from "next/link"
import Button from "@/app/ui/components/Buttons"

export function UpdateUsuario({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/usuarios/${id}/edit`}>
      <Button className="rounded-md border size-9 hover:bg-gray-100 dark:bg-blue-800 dark:hover:bg-blue-900 dark:border-none flex justify-center items-center">
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
