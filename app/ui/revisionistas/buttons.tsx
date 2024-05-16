import { DocumentTextIcon, PencilIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { deleteRevisionista } from "@/app/lib/actions"
import Button from "@/app/ui/components/Buttons"

export function UpdateRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/revisionistas/${id}/edit`}>
      <Button className="rounded border size-9 hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-300 dark:text-gray-100 border-gray-400 text-gray-800 grid place-items-center">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function ExportRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/exportacao/${id}`}>
      <Button className="rounded border size-9 hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-300 dark:text-gray-100 border-gray-400 text-gray-800 grid place-items-center">
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
