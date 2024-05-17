import { PencilIcon } from "@heroicons/react/24/outline"
import { deleteUsuario } from "@/app/lib/actions"
import Link from "next/link"
import Button from "@/app/ui/components/Buttons"

export function UpdateUsuario({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/usuarios/${id}/edit`}>
      <Button className="rounded size-9 bg-sky-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all">
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
