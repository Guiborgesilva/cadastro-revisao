"use client"

import { useState } from "react"
import {
  ExportPessoa,
  DeletePessoa,
  UpdatePessoa
} from "@/app/ui/components/Buttons"
import Button from "@/app/ui/components/Buttons"

export default function DotsDropdown({
  id,
  nome
}: {
  id: string
  nome: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div
        className="
          relative
          py-2
          px-4
          rounded-full
          cursor-pointer
          hover:bg-slate-600
          active:bg-slate-300
          transition-all
        "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 512"
          height="24"
          width="6"
        >
          <path
            fill="#ffffff"
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
      </div>
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              absolute
              top-0
              bottom-0
              left-0
              right-0
              w-screen
              h-screen
              bg-black
              bg-opacity-50
              flex
              justify-center
              items-center
              z-[20]
              animate-appear
            "
          >
            <div
              className="
                w-60
                h-auto
                bg-white
                z-[50]
                shadow-lg
                rounded-lg
                flex
                flex-col
                text-black
                text-center
                gap-4
                p-4
                animate-up
              "
            >
              <h2 className="text-[1.5rem]">
                Ações
                <hr />
              </h2>
              <UpdatePessoa
                id={id}
                nome={nome}
              />
              <ExportPessoa
                id={id}
                nome={nome}
              />
              <p onClick={() => setModalOpen((prev) => !prev)}>
                <Button
                  className="
                    text-white
                    border
                    bg-black
                    hover:bg-black/90
                    hover:text-white
                    transition-all
                    w-full
                    py-1
                    rounded
                    flex
                    items-center
                    justify-center
                  "
                >{`Excluir ${nome.split(" ")[0]}`}</Button>
              </p>
            </div>
          </div>
        </>
      )}
      {modalOpen && (
        <>
          <div
            className="
              absolute
              w-full
              h-full
              top-0
              left-0
              bottom-0
              right-0
              bg-black
              bg-opacity-50
              z-[19]
              flex
              justify-center
              items-center
              animate-appear
            "
          >
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
              "
            >
              <header>
                <h2 className="text-lg">
                  Tem certeza que deseja excluir <b>{nome.split(" ")[0]}</b>?
                </h2>
              </header>
              <main className="flex flex-row justify-center items-center gap-4 pb-1">
                <DeletePessoa id={id} />
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
                    "
                  >
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
