'use client'

import { Quicksand, Montserrat } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from "./ui/components/Buttons"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "400"
})

const montserratB = Montserrat({
  subsets: ['latin'],
  weight: "700"
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: "700"
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
      "
    >
      <div
        className="
          flex
          justify-center
          items-center
          flex-col
          gap-24
        "
      >
        <div className="menu">
          {isOpen &&
            <nav className="z-[20] animate-appear">
            <ul>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="animate-up"
              onClick={() => setIsOpen((prev) => !prev)}
              >
                <path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
              <Link
                href={{ pathname:'/controle' }}
                className={`text-white ${quicksand.className}`}
              >
                <li
                  className="
                    flex
                    items-center
                    justify-center
                    gap-4
                    text-black
                    pt-14
                    hover:text-white
                    hover:bg-black
                    hover:fill-white
                    transition-all
                    font-normal
                    animate-up
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                  </svg>
                  Area restrita
                </li>
              </Link>
            </ul>
          </nav>
          }
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white cursor-pointer hover:text-black transition-all"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="animate-up">
          <Image width={260} height={65} src="/logoSaraIcara.png" alt="Logo da Igreja Sara de Içara" />
        </div>
        <div className={`text-center text-white animate-up ${quicksand.className}`}>
          <p className="text-4xl">
            PREPARADO PARA EXPERIMENTAR
          </p>
          <p className="text-4xl mt-5">O SOBRENATURAL?
          </p>
        </div>
        <Link href={{ pathname:'/signup' }}>
          <Button
            className={`
              ${montserratB.className}
              w-[358px]
              h-[46px]
              rounded-sm
              text-black
              font-bold
              bg-white
              hover:bg-white/85
              hover:text-black
              transition
              pointer
              animate-up
            `}
          >FAZER INSCRIÇÃO</Button>
        </Link>
      </div>
      {isOpen &&
       <>
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
            z-1
          "
        ></div>
       </>
      }
    </div>
  )
}
