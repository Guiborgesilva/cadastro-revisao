"use client"

import Form from "@/app/ui/visitantes/EditForm"
import Breadcrumbs from "@/app/ui/pages/Breadcrumbs"
import { fetchVisitanteById } from "@/app/lib/actions"
import { useEffect, useState } from "react"
import { Visitante } from "@/app/lib/definitions"
import { VisitanteForm } from "@/app/lib/utils"
import {
  ModalEditSuccessVisitante,
  ModalError
} from "@/app/ui/messages/ModalMessages"
import Loading from "@/app/dashboard/visitantes/[id]/edit/loading"

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [visitante, setVisitante] = useState<Visitante | null>(null)
  const [showEditSuccessModal, setShowEditSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const visitanteData = await fetchVisitanteById(id)
        setVisitante(visitanteData)
      } catch (error) {
        console.error(`Erro: ${error}`)
        setShowErrorModal(true)
      }
    }
    fetchData()
  })

  const onSubmit = async (data: VisitanteForm) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/update-visitante/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setShowEditSuccessModal(true)
        const responseData = await response.json()
        console.log("Dados atualizados com sucesso!", responseData)
      } else {
        setShowErrorModal(true)
        console.error("Falha ao atualizar os dados!")
      }
    } catch (error) {
      setShowErrorModal(true)
      console.error(`Erro ao atualizar os dados!: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  let content

  if (visitante === null) {
    content = <Loading />
  } else {
    content = (
      <Form
        visitante={visitante}
        onSubmit={onSubmit}
        loading={loading}
      />
    )
  }

  return (
    <main>
      {showEditSuccessModal && <ModalEditSuccessVisitante />}
      {showErrorModal && <ModalError />}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Visitantes", href: "dashboard/visitantes" },
          {
            label: "Editar Visitante",
            href: `dashboard/visitantes/${id}/edit`,
            active: true
          }
        ]}
      />
      {content}
    </main>
  )
}
