import { mulish } from "../fonts"
import { fetchFilteredPessoas } from '@/app/lib/actions'
import Link from 'next/link'
import { nomeSobrenome } from '@/app/lib/utils'

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
    {pessoas?.map((pessoa) => (
        <Link href={`/controle/${pessoa.id}/edit`} key={pessoa.id}>
          <div className={`
            ${mulish.className}
            w-full
            p-2
            rounded-lg
            transition
            bw
            flex
            items-center
            `}
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
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" viewBox="0 0 128 512"><path fill="#ffffff" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
              </div>
            </div>
          </div>
        </Link>
      )
      )}
    </>
  );
}