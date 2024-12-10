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
  let primeiroNome = nome.split(" ")[0]


  if (sexo === "Feminino") {
    boasVindas = "bem-vinda"
  } else if (sexo === "Masculino") {
    boasVindas = "bem-vindo"
  }
  return (
    <Link
      key={id}
      href={`
        https://api.whatsapp.com/send?phone=55${telefone}&text=Ol%C3%A1%2C%20*${primeiroNome}*!%20Seja%20muito%20${boasVindas}%20%C3%A0%20Sara%20Nossa%20Terra%20de%20I%C3%A7ara!%20%F0%9F%94%A5%0A%0AQueremos%20te convidar%20a%20participar%20dos%20nossos%20momentos%20especiais%3A%0A%E2%9C%A8%20*Quinta-feira%2C%2019h30*%3A%20Culto%20de%20Campanha%0A%F0%9F%94%A5%20*S%C3%A1bado%2C%2019h*%3A%20Arena%20Jovem%0A%F0%9F%92%96%20*Domingo%2C%2019h*%3A%20Culto%20da%20Fam%C3%ADlia%0A%0ASer%C3%A1%20uma%20alegria%20ter%20voc%C3%AA%20conosco!%20N%C3%A3o%20deixe%20de%20seguir%20nosso%20perfil%20no%20Instagram%20para%20ficar%20por%20dentro%20de%20todas%20as%20novidades%3A%0A%F0%9F%91%89%20https%3A%2F%2Fwww.instagram.com%2Fsaraicarasc%3Figsh%3DMXc3ZXBjd3o1cmY3ZQ%3D%3D%0A%0AEstamos%20ansiosos%20para%20te%20ver%20por%20aqui!%20%F0%9F%98%8A`}
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
