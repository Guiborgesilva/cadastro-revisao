import type { Metadata } from "next"
import { inter } from "@/app/ui/fonts"
import "@/app/ui/globals.css"
import "@/app/ui/animations.css"
import { Providers } from "@/app/providers"

export const metadata: Metadata = {
  title: "Cadastro para o Revisão de Vidas",
  description: "App para cadastro de pessoas para o Revisão de Vidas",
  keywords:
    "Revisão de Vidas, Revisão, Sara Nossa Terra, Sara, Igreja, Sobrenatural, Deus, Maravilhoso"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
