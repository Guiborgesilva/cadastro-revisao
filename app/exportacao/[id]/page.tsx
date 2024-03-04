// import Image from "next/image"

// export default function ExportacaoIndividual(
//   { id, nome, equipe }: {
//     id: string,
//     nome: string,
//     equipe: string
//   }
//   ){
//     return (
  //     <>
  //       <body>
  //         <header></header>
  //         <p>Nome e sobrenome</p>
  //         <p>REVISIONISTA</p>
  //         <p>Nome da equipe</p>
  //         <p>EQUIPE</p>
  //         <p>Içara</p>
  //         <p>CIDADE</p>
  //         <Image alt="Flame outline" src="/public/sara-outline.png" />
  //       </body>
  //     </>
  //   )
  // }

import { fetchPessoasById } from "@/app/lib/actions";
import Rhema from '@/app/ui/components/Rhema'

export default async function ExportacaoIndividual({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pessoas] = await Promise.all([
    fetchPessoasById(id)
  ])

  return (
    <Rhema pessoa={pessoas} />
  )
}