import { PencilIcon } from "@heroicons/react/24/outline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { deleteVisitante } from "@/app/lib/actions"
import Button from "@/app/ui/components/Buttons"

export function UpdateVisitante({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/visitantes/${id}/edit`}>
      <Button className="rounded size-9 bg-sky-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  )
}

export function ChamarVisitante({
  id,
  sexo,
  nome,
  telefone
}: {
  id: string
  sexo: string
  nome: string
  telefone: string
}) {
  let boasVindas

  if (sexo === "Feminino") {
    boasVindas = "bem-vinda"
  } else if (sexo === "Masculino") {
    boasVindas = "bem-vindo"
  }
  return (
    <Link
      key={id}
      href={`
        https://api.whatsapp.com/send?phone=55${telefone}&text=Oi%20${
        nome.split(" ")[0]
      },%20seja%20${boasVindas}%20à%20Sara%20de%20Içara!`}
      target="_blank">
      <Button className="rounded size-9 bg-green-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="lg"
        />
      </Button>
    </Link>
  )
}

export function DeleteVisitante({ id }: { id: string }) {
  const deleteVisitanteWithId = deleteVisitante.bind(null, id)
  return (
    <form action={deleteVisitanteWithId}>
      <Button className="rounded p-1 w-24 hover:bg-red-900 bg-red-800 text-white">
        Excluir
      </Button>
    </form>
  )
}
