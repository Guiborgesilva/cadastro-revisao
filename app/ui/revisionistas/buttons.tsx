import { DocumentTextIcon, PencilIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { deleteRevisionista } from "@/app/lib/actions"
import Button from "@/app/ui/components/Buttons"

export function UpdateRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/revisionistas/${id}/edit`}>
      <Button className="rounded size-9 bg-sky-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function ExportRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/exportacao/${id}`}>
      <Button className="rounded size-9 bg-green-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all">
        <DocumentTextIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function DeleteRevisionista({ id }: { id: string }) {
  const deleteRevisionistaWithId = deleteRevisionista.bind(null, id)
  return (
    <form action={deleteRevisionistaWithId}>
      <Button className="rounded p-1 w-24 hover:bg-red-900 bg-red-800 text-white">
        Excluir
      </Button>
    </form>
  )
}
