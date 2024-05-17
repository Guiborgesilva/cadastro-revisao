"use client"

import Form from "@/app/ui/visitantes/CreateForm"
import Breadcrumbs from "@/app/ui/pages/Breadcrumbs"
import { VisitanteForm } from "@/app/lib/utils"
import { useState } from "react"
import {
  ModalError,
  ModalSuccessVisitante
} from "@/app/ui/messages/ModalMessages"

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [showModalSuccess, setShowSuccessModal] = useState(false)
  const [showModalError, setShowErrorModal] = useState(false)

  async function onSubmit(data: VisitanteForm) {
    try {
      setLoading(true)
      const response = await fetch("/api/register-visitante", {
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
      {showModalSuccess && <ModalSuccessVisitante />}
      {showModalError && <ModalError />}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Visitantes", href: "/dashboard/visitantes" },
          {
            label: "Cadastrar novo visitante",
            href: "/dashboard/visitantes/register",
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
