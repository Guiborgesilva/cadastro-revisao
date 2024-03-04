import { fetchPessoasById } from "@/app/lib/actions";
import Form from '@/app/ui/components/EditForm'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pessoas] = await Promise.all([
    fetchPessoasById(id)
  ])

  return (
    <Form pessoa={pessoas} />
  )
}
