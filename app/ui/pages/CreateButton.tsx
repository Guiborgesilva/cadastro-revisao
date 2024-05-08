"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Button from "@/app/ui/components/Buttons"
import { PlusIcon } from "@heroicons/react/24/outline"

export function Cadastrar({ title }: { title: string }) {
  const pathName = usePathname()
  return (
    <Link href={`${pathName}/register`}>
      <Button className="flex h-10 items-center rounded-lg bg-blue-500 dark:bg-blue-800 px-4 text-sm font-medium text-white transition-colors dark:hover:bg-blue-900 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
        <span className="hidden md:block">{title}</span>
        <PlusIcon className="h-5 md:ml-4" />
      </Button>
    </Link>
  )
}
