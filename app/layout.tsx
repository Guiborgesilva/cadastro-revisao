import type { Metadata } from 'next'
import './ui/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata: Metadata = {
  title: 'Cadastro para o Revisão de Vidas',
  description: 'App para cadastro de pessoas para o Revisão de Vidas',
  keywords: 'Revisão de Vidas, Revisão, Sara Nossa Terra, Sara, Igreja, Sobrenatural, Deus',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className=" w-screen h-screen overflow-hidden bg-[url('/initialBackground.jpg')] bg-no-repeat bg-center bg-cover">{children}</body>
    </html>
  )
}
