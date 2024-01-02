import type { Metadata } from 'next'
import localFont from '@next/font/local'
import './ui/globals.css'

const Heydex = localFont({ src:'./Heydex.ttf' })


export const metadata: Metadata = {
  title: 'Cadastro para o Revisão de Vidas',
  description: 'App para cadastro de pessoas para o Revisão de Vidas',
  themeColor: '#000'
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
