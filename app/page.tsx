'use client'

import { Roboto, Quicksand } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import Sidebar from './ui/components/Sidebar'
import Image from 'next/image'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: "700"
})

export default function Home() {
  const [ sidebar, setSidebar ] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="flex justify-center items-center mt-24 flex-col gap-24">
        <div className="menu" onClick={showSidebar}>
          {sidebar && <Sidebar active={setSidebar} />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer hover:text-black transition-all">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
        </div>
        <div>
          <Image width={260} height={65} src="/logoSaraIcara.png" alt="Logo da Igreja Sara de Içara" />
        </div>
        <div className={`text-center text-white ${quicksand.className}`}>
          <p className="text-4xl">
            PREPARADO PARA EXPERIMENTAR
          </p>
          <p className="text-4xl mt-5">O SOBRENATURAL?
          </p>
        </div>
        <Link href={{ pathname:'/signup' }}>
          <button
            className="
            text-white
              w-[358px]
              h-[46px]
              rounded-[10px]
              hover:bg-white
              hover:text-black
              transition
              pointer
              bw
            "
          >
            <p className={roboto.className}>
              QUERO ME INSCREVER!
            </p>
          </button>
        </Link>
      </div>
    </>
  )
}
