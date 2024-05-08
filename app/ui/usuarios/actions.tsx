"use client"

import { DeleteUsuario, UpdateUsuario } from "@/app/ui/usuarios/buttons"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Button from "@/app/ui/components/Buttons"

export function Actions({ id, nome }: { id: string; nome: string }) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <UpdateUsuario id={id} />
      <Button
        className="rounded-md border size-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-red-900 dark:bg-red-800 dark:border-none"
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
                rounded-lg
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
                <DeleteUsuario id={id} />
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
