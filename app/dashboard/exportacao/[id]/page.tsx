import { fetchRevisionistaById } from "@/app/lib/actions"
import Rhema from "@/app/ui/components/Rhema"

export default async function ExportacaoIndividual({
  params
}: {
  params: { id: string }
}) {
  const id = params.id
  const [revisionista] = await Promise.all([fetchRevisionistaById(id)])

  return <Rhema revisionista={revisionista} />
}
