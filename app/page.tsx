import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-24 flex-col gap-24">
        <div>
          <img src="/logoSaraIcara.png" alt="Logo da Igreja Sara de Içara" />
        </div>
        <div className="text-center text-white">
          <p className="text-5xl">
            PREPARADO PARA EXPERIMENTAR
          </p>
          <p className="text-5xl mt-5"><span className="text-6xl">O</span> SOBRENATURAL?
          </p>
        </div>
        <button className="text-white w-[358px] h-[46px] rounded-[10px] bw">
          <span className={roboto.className}>
            QUERO ME INSCREVER!
          </span>
        </button>
      </div>

    </>
  )
}
