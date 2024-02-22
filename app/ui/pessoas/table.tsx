import { mulish } from "../fonts"
import { fetchFilteredPessoas } from '@/app/lib/actions'
import Link from 'next/link'
import { nomeSobrenome } from '@/app/lib/utils'
import { DeletePessoa, UpdatePessoa } from "../buttons"

export default async function PessoasTable({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const pessoas = await fetchFilteredPessoas(query, currentPage);

  return (
    <>
    {pessoas?.length > 0 ?
    pessoas?.map((pessoa) => (
      <div className={`
        ${mulish.className}
        w-full
        p-2
        rounded-lg
        transition
        bw
        flex
        flex-col
        gap-2
        items-center
        `}
        key={pessoa.id}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-start">
            <div className="
              rounded-full
              size-10
              bw
              flex
              justify-center
              items-center
              "
            >
              <h2 className="text-2xl">
                {pessoa.nome_pessoa.substring(0,1)}
              </h2>
            </div>
            <div className="ml-3">
              <div className="flex justify-start flex-col">
                <p className="justify-start">
                  {nomeSobrenome(`${pessoa.nome_pessoa}`)}
                </p>
                <p className="text-[13px] justify-end">{pessoa.lider_equipe}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-2">
          <DeletePessoa id={pessoa.id} />
          <UpdatePessoa id={pessoa.id} />
        </div>
      </div>
    )
    ) :
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
        <p>Nenhuma pessoa cadastrada!</p>
        <Link href={'/signup'}>Clique aqui para começar a cadastrar!</Link>
      </div>
      }
    </>
  )
}