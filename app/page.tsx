import { Roboto, Quicksand } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: "700"
})

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center mt-24 flex-col gap-24">
        <div>
          <img src="/logoSaraIcara.png" alt="Logo da Igreja Sara de Içara" />
        </div>
        <div className={`text-center text-white ${quicksand.className}`}>
          <p className="text-5xl">
            PREPARADO PARA EXPERIMENTAR
          </p>
          <p className="text-5xl mt-5"><span className="text-6xl">O</span> SOBRENATURAL?
          </p>
        </div>
        <Link href={{ pathname:'/signup' }}>
          <button
            className="
            text-white
              w-[358px]
              h-[46px]
              rounded-[10px]
              hover:bg-white
              hover:text-black
              transition
              pointer
              bw
            "
          >
            <span className={roboto.className}>
              QUERO ME INSCREVER!
            </span>
          </button>
        </Link>
        <Link
          href={{ pathname:'/controle' }}
          className={`text-white ${quicksand.className}`}
        >Acesso restrito</Link>
      </div>
    </>
  )
}
