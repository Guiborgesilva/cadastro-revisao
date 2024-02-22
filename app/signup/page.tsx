'use client'

import { mulish } from "../ui/fonts"
import Link from "next/link"
import { SignupForm } from "../ui/components/SignupForm"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Signup(){

  return (
    <section className={mulish.className}>
      <div className="pl-[2%] pr-[2%]">
        <div className="
          flex
          justify-center
          flex-col
          mr-auto
          ml-auto
          text-white
          gap-10
          rounded-[10px]
          p-10
          mt-10
          mb-10
          bg-[#1E1E1E]
          w-[320px]
          sm:w-[400px]
          xl:w-[562px]
          shadow-2xl
          "
        >
          <div className="flex items-center md:gap-4">
          <Link href={{ pathname:'/' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          </Link>
          <h1 className="w-full text-center text-[1.3rem] md:text-4xl">Faça a sua inscrição!</h1>
          </div>
          <SignupForm />
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}