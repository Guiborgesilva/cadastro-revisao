"use client"

import Form from "@/app/ui/revisionistas/CreateForm"
import Breadcrumbs from "@/app/ui/pages/Breadcrumbs"
import { RevisionistaForm } from "@/app/lib/utils"
import { useState } from "react"
import {
  ModalError,
  ModalSuccessRevisionista
} from "@/app/ui/messages/ModalMessages"

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [showModalSuccess, setShowSuccessModal] = useState(false)
  const [showModalError, setShowErrorModal] = useState(false)

  async function onSubmit(data: RevisionistaForm) {
    try {
      setLoading(true)
      const response = await fetch("/api/register-revisionista", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log("Dados enviados com sucesso!", responseData)
        setShowSuccessModal(true)
      } else {
        setShowErrorModal(true)
        console.error("Falha ao enviar os dados!")
      }
    } catch (error) {
      setShowErrorModal(true)
      console.error(`Erro ao enviar os dados!: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      {showModalSuccess && <ModalSuccessRevisionista />}
      {showModalError && <ModalError />}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Revisionistas", href: "/dashboard/revisionistas" },
          {
            label: "Cadastrar Revisionista",
            href: "/dashboard/revisionistas/register",
            active: true
          }
        ]}
      />
      <Form
        onSubmit={onSubmit}
        loading={loading}
      />
    </main>
  )
}
