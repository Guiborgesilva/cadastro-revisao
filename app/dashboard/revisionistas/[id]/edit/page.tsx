"use client"

import Form from "@/app/ui/revisionistas/EditForm"
import Breadcrumbs from "@/app/ui/pages/Breadcrumbs"
import { fetchRevisionistaById } from "@/app/lib/actions"
import { useEffect, useState } from "react"
import { Revisionista } from "@/app/lib/definitions"
import { RevisionistaForm } from "@/app/lib/utils"
import {
  ModalEditSuccessRevisionista,
  ModalError
} from "@/app/ui/messages/ModalMessages"
import Loading from "@/app/dashboard/revisionistas/[id]/edit/loading"

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [revisionista, setRevisionista] = useState<Revisionista | null>(null)
  const [showEditSuccessModal, setShowEditSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const revisionistaData = await fetchRevisionistaById(id)
        setRevisionista(revisionistaData)
      } catch (error) {
        console.error(`Erro: ${error}`)
        setShowErrorModal(true)
      }
    }
    fetchData()
  })

  const onSubmit = async (data: RevisionistaForm) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/update-revisionista/${id}`, {
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

  if (revisionista === null) {
    content = <Loading />
  } else {
    content = (
      <Form
        revisionista={revisionista}
        onSubmit={onSubmit}
        loading={loading}
      />
    )
  }

  return (
    <main>
      {showEditSuccessModal && <ModalEditSuccessRevisionista />}
      {showErrorModal && <ModalError />}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Revisionistas", href: "dashboard/revisionistas" },
          {
            label: "Editar Revisionista",
            href: `dashboard/revisionistas/${id}/edit`,
            active: true
          }
        ]}
      />
      {content}
    </main>
  )
}
