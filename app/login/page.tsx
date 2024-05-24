"use client"

import Image from "next/image"
import LoginForm from "@/app/ui/login/LoginForm"

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-200 dark:bg-[#0F172A]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-pt-32">
        <div className="flex h-20 w-full items-center justify-center rounded bg-black p-3 md:h-36 animate-up">
          <div className="w-32 text-white md:w-36">
            <div>
              <Image
                width={260}
                height={65}
                src="/logoSaraIcara.png"
                alt="Logo da Igreja Sara de Içara"
              />
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
