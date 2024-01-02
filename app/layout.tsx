import type { Metadata } from 'next'
import localFont from '@next/font/local'
import './ui/globals.css'

const Heydex = localFont({ src:'./Heydex.ttf' })


export const metadata: Metadata = {
  title: 'Cadastro para o Revisão de Vidas',
  description: 'App para cadastro de pessoas para o Revisão de Vidas',
  keywords: 'Revisão de Vidas, Revisão, Sara Nossa Terra, Sara, Igreja, Sobrenatural, Deus'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={Heydex.className}>{children}</body>
    </html>
  )
}
