import Link from "next/link"
import { montserrat } from "../fonts"
import { fetchFilteredRevisionistas } from "@/app/lib/actions"
import { nomeSobrenome } from "@/app/lib/utils"
import DotsDropdown from "../components/DotsDropdown"

export default async function PessoasTable({
  query,
  currentPage
}: {
  query: string
  currentPage: number
}) {
  const revisionistas = await fetchFilteredRevisionistas(query, currentPage)

  return (
    <>
      {revisionistas?.length > 0 ? (
        revisionistas.map((revisionista) => (
          <div
            className={`
        ${montserrat.className}
        w-full
        h-[77.5px]
        p-2
        rounded
        transition
        border
        border-white
        flex
        flex-col
        gap-2
        items-center
        `}
            key={revisionista.id}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-start p-2">
                <div
                  className="
              rounded-full
              size-10
              bw
              grid
              place-items-center
              bg-white
              "
                >
                  <h2
                    className="
                  text-2xl
                  text-black
                  font-bold
                  cursor-default
                "
                  >
                    {revisionista.nome_pessoa.substring(0, 1)}
                  </h2>
                </div>
                <div className="ml-3 cursor-default">
                  <div className="flex justify-start flex-col">
                    <p className="justify-start">
                      {nomeSobrenome(`${revisionista.nome_pessoa}`)}
                    </p>
                    <p className="text-[13px] justify-end">
                      {revisionista.lider_equipe.split("|")[1]}
                    </p>
                  </div>
                </div>
              </div>
              <DotsDropdown
                id={revisionista.id}
                nome={revisionista.nome_pessoa}
              />
            </div>
          </div>
        ))
      ) : (
        <div
          className="
          flex
          justify-center
          items-center
          w-full
          col-span-2
          flex-col
          "
        >
          <p>Nenhuma pessoa encontrada!</p>
          <Link
            className="hover:underline"
            href={"/signup"}
          >
            Clique aqui para cadastrar!
          </Link>
        </div>
      )}
    </>
  )
}
