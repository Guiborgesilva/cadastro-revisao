import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { inter } from "@/app/ui/fonts"
import Image from "next/image"
import Button from "@/app/ui/components/Buttons"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-48 shrink-0 items-end rounded bg-black p-4 md:h-52">
        <Image
          width={260}
          height={65}
          src="/logoSaraIcara.png"
          alt="Logo da Igreja Sara de Içara"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded bg-slate-100 dark:bg-slate-700 px-6 py-10 md:w-full">
          <p
            className={`text-xl text-gray-800 dark:text-white md:text-3xl  ${inter.className} antialiased`}>
            <strong>Bem-vindo ao Painel da Sara de Içara.</strong>
            <br />
            <span className="text-[1rem] leading-[.25rem]">
              Tenha o controle de Visitantes e Revisionistas no mesmo lugar!
            </span>
          </p>
          <Link href="/login">
            <Button className="flex items-center gap-5 self-start rounded bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black/90 md:text-base">
              Log in <ArrowRightIcon className="w-5 md:w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
