import {
  AnimationError,
  AnimationSuccess
} from "@/app/ui/components/AnimationMessages"


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
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
            >Ir para a Home</a>
            <a
              href={'/signup'}
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
            >Cadastrar novo revisionista</a>
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
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
            >Ir para a Home</a>
            <a
              href={'/controle'}
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
            >Ir para Controle</a>
          </section>
        </section>
      </main>
    </>
  )
}

export function ModalError(){
  const ReloadLink: React.FC = () => {
    const handleReload = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault(); // Evita a navegação padrão para o destino do link
      window.location.reload(); // Recarrega a página
    }
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
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
            >Ir para a Home</a>
            <a
              href={'#'}
              className="
                text-black
                border
                border-black
                hover:bg-black
                hover:text-white
                transition-all
                w-[252px]
                py-1
                rounded
                flex
                items-center
                justify-center
              "
              onClick={handleReload}
            >Tentar novamente</a>
          </section>
        </section>
      </main>
    </>
  )
}}