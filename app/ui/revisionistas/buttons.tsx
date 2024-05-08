import { DocumentTextIcon, PencilIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { deleteRevisionista } from "@/app/lib/actions"
import Button from "@/app/ui/components/Buttons"

export function UpdateRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/revisionistas/${id}/edit`}>
      <Button className="rounded-md border p-2 hover:bg-gray-100 dark:bg-blue-800 dark:hover:bg-blue-900 dark:border-none">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function ExportRevisionista({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/exportacao/${id}`}>
      <Button className="rounded-md border p-2 hover:bg-gray-100 dark:bg-green-800 dark:hover:bg-green-900 dark:border-none">
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
