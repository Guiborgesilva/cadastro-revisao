"use client"

import {
  DeleteVisitante,
  ChamarVisitante,
  UpdateVisitante
} from "@/app/ui/visitantes/buttons"
import Button from "@/app/ui/components/Buttons"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export function Actions({
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
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <UpdateVisitante id={id} />
      <ChamarVisitante
        id={id}
        nome={nome}
        telefone={telefone}
        sexo={sexo}
      />
      <Button
        className="rounded size-9 bg-red-100 dark:bg-slate-300 shadow hover:brightness-90 text-slate-800 grid place-items-center transition-all"
        onClick={() => setModalOpen((prev) => !prev)}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </Button>
      {modalOpen && (
        <>
          <div
            className="
              fixed
              w-full
              h-full
              top-0
              left-0
              bottom-0
              right-0
              bg-black
              bg-opacity-50
              backdrop-blur-sm
              z-[19]
              flex
              justify-center
              items-center
              animate-appear
              transition-all
            ">
            <div
              className="
                w-[400px]
                h-[150px]
                rounded
                bg-white
                text-black
                p-4
                flex
                flex-col
                justify-between
                animate-up
              ">
              <header>
                <h2 className="text-lg">
                  Tem certeza que deseja excluir <b>{nome.split(" ")[0]}</b>?
                </h2>
              </header>
              <main className="flex flex-row justify-center items-center gap-4 pb-1">
                <DeleteVisitante id={id} />
                <button onClick={() => setModalOpen((prev) => !prev)}>
                  <Button
                    className="
                      text-white
                      border
                      bg-black
                      hover:bg-black/90
                      hover:text-white
                      transition-all
                      w-24
                      py-1
                      rounded
                      flex
                      items-center
                      justify-center
                    ">
                    Cancelar
                  </Button>
                </button>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  )
}
