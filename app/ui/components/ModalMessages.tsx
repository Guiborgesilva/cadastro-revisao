import {
  AnimationError,
  AnimationSuccess
} from "@/app/ui/components/AnimationMessages"
import Button from "@/app/ui/components/Buttons"


export function ModalSuccess(){
  return (
    <>
      <main
        className="
          fixed
          top-0
          right-0
          bottom-0
          left-0
          w-full
          h-full
          bg-black
          bg-opacity-50
          grid
          place-items-center
          z-20
        "
      >
        <section
          className="
            w-[21.25rem]
            py-8
            mx-[2%]
            rounded-lg
            bg-white
            flex
            flex-col
            items-center
            gap-4
            animate-up
            z-90
          "
          onClick={(e) => e.stopPropagation()} // Impedir o fechamento do modal quando clicar dentro dele
        >
          <header>
            <h2 className="
              text-green-600
              text-3xl
            ">Sucesso!</h2>
          </header>
          <AnimationSuccess />
          <section
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <a
              href={'/'}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Ir para Home</Button>
            </a>
            <a
              href={'/signup'}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Cadastrar novo revisionista</Button>
            </a>
          </section>
        </section>
      </main>
    </>
  )
}

export function ModalEditSuccess(){
  return (
    <>
      <main
        className="
          fixed
          top-0
          right-0
          bottom-0
          left-0
          w-full
          h-full
          bg-black
          bg-opacity-50
          grid
          place-items-center
          z-20
        "
      >
        <section
          className="
            w-[21.25rem]
            py-8
            mx-[2%]
            rounded-lg
            bg-white
            flex
            flex-col
            items-center
            gap-4
            animate-up
            z-90
          "
          onClick={(e) => e.stopPropagation()} // Impedir o fechamento do modal quando clicar dentro dele
        >
          <header>
            <h2 className="
              text-green-600
              text-3xl
            ">Sucesso!</h2>
          </header>
          <AnimationSuccess />
          <section
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <a
              href={'/'}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Ir para Home</Button>
            </a>
            <a
              href={'/controle'}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Ir para Controle</Button>
            </a>
          </section>
        </section>
      </main>
    </>
  )
}

export function ModalError(){
  return (
    <>
      <main
        className="
          fixed
          top-0
          right-0
          bottom-0
          left-0
          w-full
          h-full
          bg-black
          bg-opacity-50
          grid
          place-items-center
          z-20
        "
      >
        <section
          className="
            w-[21.25rem]
            py-8
            mx-[2%]
            rounded-lg
            bg-white
            flex
            flex-col
            items-center
            gap-8
            animate-up
            z-90
          "
          onClick={(e) => e.stopPropagation()}
        >
          <header>
            <h2 className="
              text-red-500
              text-3xl
            ">Algo deu errado!</h2>
          </header>
          <AnimationError />
          <section
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <a
              href={'/'}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Ir para Home</Button>
            </a>
            <a
              href={''}
              onClick={() => window.location.reload()}
            >
              <Button
                className="
                  text-white
                  border
                  bg-black
                  hover:bg-black/90
                  hover:text-white
                  transition-all
                  w-[252px]
                  py-1
                  rounded
                  flex
                  items-center
                  justify-center
                "
              >Tentar novamente</Button>
            </a>
          </section>
        </section>
      </main>
    </>
  )
}