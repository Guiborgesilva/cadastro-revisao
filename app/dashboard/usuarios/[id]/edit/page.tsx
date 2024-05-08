"use client"

import Form from "@/app/ui/usuarios/EditForm"
import Breadcrumbs from "@/app/ui/pages/Breadcrumbs"
import { fetchUsuarioById } from "@/app/lib/actions"
import { useEffect, useState } from "react"
import { Usuario } from "@/app/lib/definitions"
import { UserForm } from "@/app/lib/utils"
import {
  ModalEditSuccessUsuario,
  ModalError
} from "@/app/ui/messages/ModalMessages"
import Loading from "@/app/dashboard/usuarios/[id]/edit/loading"

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [showEditSuccessModal, setShowEditSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsuarioById(id)
        setUsuario(data)
      } catch (error) {
        console.error(`Erro: ${error}`)
        setShowErrorModal(true)
      }
    }
    fetchData()
  })

  const onSubmit = async (data: UserForm) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/update-usuario/${id}`, {
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

  if (usuario === null) {
    content = <Loading />
  } else {
    content = (
      <Form
        usuario={usuario}
        onSubmit={onSubmit}
        loading={loading}
      />
    )
  }

  return (
    <main>
      {showEditSuccessModal && <ModalEditSuccessUsuario />}
      {showErrorModal && <ModalError />}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Usuários", href: "dashboard/usuarios" },
          {
            label: "Editar Usuário",
            href: `dashboard/usuarios/${id}/edit`,
            active: true
          }
        ]}
      />
      {content}
    </main>
  )
}
