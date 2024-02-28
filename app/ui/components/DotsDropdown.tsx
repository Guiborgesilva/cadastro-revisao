'use client'

import { useState } from "react"
import { DeletePessoa, UpdatePessoa } from "../buttons"

export default function DotsDropdown({ id, nome }: { id: string, nome: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            height="24"
            width="6"
            className="cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <path
              fill="#ffffff"
              d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
            />
          </svg>
        {isOpen &&
          <>
            <div
            className="
              absolute
              top-7
              left-0
              translate-x-[-30%]
              p-2
              bg-white
              rotate-45
              z-[20]
              shadow-lg
              animate-appear
            "
          >
          </div>
          <div
            className="
              w-48
              h-auto
              bg-white
              absolute
              top-9
              left-0
              translate-x-[-50%]
              z-[20]
              shadow-lg
              rounded-lg
              flex
              flex-col
              text-black
              text-center
              gap-4
              p-4
              animate-appear
            "
          >
            <UpdatePessoa id={id} nome={nome} />
            <p
              className="
                p-1
                cursor-pointer
                border
                border-black
                rounded-md
              hover:bg-black
              hover:text-white
                transition-all
              "
            >Exportar {nome.split(' ')[0]}</p>
            <p
              className="
                p-1
                cursor-pointer
                border
                border-black
                rounded-md
              hover:bg-black
              hover:text-white
                transition-all
                w-full
              "
              onClick={() => {
                setModalOpen((prev) => !prev)
                setIsOpen((prev) => !prev)
              }}
            >Excluir {nome.split(' ')[0]}</p>
          </div>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              fixed
              top-0
              bottom-0
              left-0
              right-0
              w-screen
              h-screen
              z-[19]
            "
          ></div>
        </>
        }
      </div>
      {modalOpen &&
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
                <h2
                  className="text-lg"
                >Tem certeza que deseja excluir <b>{nome.split(' ')[0]}</b>?</h2>
              </header>
              <main className="flex flex-row justify-center items-center gap-4 pb-1">
                <DeletePessoa id={id} />
                <button
                  className="
                    p-1
                    cursor-pointer
                    border
                    border-black
                    rounded-md
                  hover:bg-black
                  hover:text-white
                    transition-all
                    w-24
                  "
                  onClick={() => setModalOpen((prev) => !prev)}
                >Cancelar</button>
              </main>
            </div>
          </div>
        </>
      }
    </>
  )
}