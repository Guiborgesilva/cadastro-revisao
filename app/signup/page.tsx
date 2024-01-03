import { mulish } from "../ui/fonts"

export default function Signup(){
  return (
    <>
    <section className={mulish.className}>
      <div className="
        flex
        justify-center
        items center
        flex-col
        mr-auto
        ml-auto
        text-white
        gap-10
        rounded-[10px]
        pl-10
        pr-10
        pt-5
        pb-5
        bg-[#1E1E1E]
        max-w-[562px]
        "
      >
        <h1 className="text-4xl">Faça a sua inscrição!</h1>
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="nome">Nome completo</label>
          <input
            className="text-black p-2 rounded-[10px]"
            autoFocus
            name="nome"
          />
          <label htmlFor="data">Data de nascimento</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="data"
          />
          <label htmlFor="sexo">Sexo</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="sexo"
          />
          <label htmlFor="lider-e-equipe">Líder e Equipe</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="lider-e-equipe"
          />
          <label htmlFor="telefone">Telefone</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="telefone"
          />
          <label htmlFor="email">E-mail</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="email"
          />
          <label htmlFor="nome-da-mae">Nome da mãe</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="nome-da-mae"
          />
          <label htmlFor="nome-do-pai">Nome do pai</label>
          <input
            className="text-black p-2 rounded-[10px]"
            name="nome-do-pai"
          />
          <button className="
            p-2
            mt-3
            rounded-[10px]
            hover:bg-white
            hover:text-black
            transition
            bw
            "
          >
            INSCREVER!
          </button>
        </form>
      </div>
    </section>
    </>
  )
}