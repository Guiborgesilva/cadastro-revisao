import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 flex-col gap-20">
        <div>
          <img src="/logoSaraIcara.png" alt="Logo da Igreja Sara de Içara" />
        </div>
        <div className="text-center text-white">
          <p className="md:text-5xl sm:text-[32px]">
            PREPARADO PARA EXPERIMENTAR
          </p>
          <p className="md:text-5xl sm:text-[32px] md:mt-5 sm:mt-3"><span className="md:text-6xl sm:text-[46px]">O</span> SOBRENATURAL?
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
