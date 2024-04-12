import { fetchPessoaById } from "@/app/lib/actions";
import Rhema from '@/app/ui/components/Rhema'

export default async function ExportacaoIndividual({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pessoa] = await Promise.all([
    fetchPessoaById(id)
  ])

  return (
    <Rhema pessoa={pessoa} />
  )
}