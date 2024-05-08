"use client"

import Button from "@/app/ui/components/Buttons"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(`Erro: ${error}`)
  }, [error])

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-black, dark:text-white">
        Algo deu errado!
      </h2>
      <Button
        className="mt-4 rounded-md bg-blue-500 dark:bg-blue-800 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400 dark:hover:bg-blue-900"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }>
        Tentar novamente
      </Button>
    </main>
  )
}
