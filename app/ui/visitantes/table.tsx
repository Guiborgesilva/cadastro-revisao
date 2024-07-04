import Link from "next/link"
import { fetchFilteredVisitantes } from "@/app/lib/actions"
import { initials, nomeSobrenome } from "@/app/lib/utils"
import { Actions } from "@/app/ui/visitantes/actions"

export default async function VisitantesTable({
  query,
  currentPage
}: {
  query: string
  currentPage: number
}) {
  const visitantes = await fetchFilteredVisitantes(query, currentPage)

  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 dark:bg-slate-700 p-2 md:pt-0">
            <div className="md:hidden">
              {visitantes?.length > 0 ? (
                visitantes.map((visitante) => (
                  <div
                    key={visitante.id}
                    className="mb-2 w-full rounded-md bg-white dark:bg-slate-500 p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p className="size-10 rounded-full text-black bg-sky-100 dark:bg-slate-300 dark:text-black grid place-items-center font-bold">
                            {initials(visitante.nome)}
                          </p>
                          <p className="text-black text-xl ml-2 dark:text-white">
                            {nomeSobrenome(visitante.nome)}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-slate-300">
                          Visitante de: {visitante.quem_convidou}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div>
                        <p>
                          <span className="text-sm text-black dark:text-slate-300">
                            Bairro:
                          </span>
                          {` ${visitante.bairro}`}
                        </p>
                        <p className="text-sm">
                          {visitante.data_nascimento.split("-")[2]}/
                          {visitante.data_nascimento.split("-")[1]}/
                          {visitante.data_nascimento.split("-")[0]}
                        </p>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Actions
                          id={visitante.id}
                          sexo={visitante.sexo}
                          nome={visitante.nome}
                          telefone={visitante.telefone}
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3"></td>
                  <td className="whitespace-nowrap px-3 py-3"></td>
                  <td className="whitespace-nowrap px-3 py-3"></td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>Nenhum visitante encontrado!</p>
                    <Link
                      className="hover:underline"
                      href={"/dashboard/visitantes/register"}>
                      Clique aqui para cadastrar!
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3"></td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3"></td>
                </tr>
              )}
            </div>
            <table className="hidden min-w-full text-gray-900 dark:text-white md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-5 font-medium sm:pl-6">
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 font-medium">
                    Bairro
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 font-medium">
                    Quem convidou
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 font-medium">
                    Data de nasc.
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 font-medium">
                    Sexo
                  </th>
                  <th
                    scope="col"
                    className="relative py-3 pl-6 pr-3">
                    <span className="font-normal">Ações</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-500">
                {visitantes?.length > 0 ? (
                  visitantes.map((visitante) => (
                    <tr
                      key={visitante.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <p className="size-10 rounded-full grid place-items-center bg-sky-100 text-black dark:bg-slate-300 dark:text-black font-bold">
                            {initials(visitante.nome)}
                          </p>
                          <p>{nomeSobrenome(visitante.nome)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {visitante.bairro}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {visitante.quem_convidou}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {visitante.data_nascimento.split("-")[2]}/
                        {visitante.data_nascimento.split("-")[1]}/
                        {visitante.data_nascimento.split("-")[0]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {visitante.sexo}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-start gap-3">
                          <Actions
                            id={visitante.id}
                            sexo={visitante.sexo}
                            nome={visitante.nome}
                            telefone={visitante.telefone}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3"></td>
                    <td className="whitespace-nowrap px-3 py-3"></td>
                    <td className="whitespace-nowrap px-3 py-3"></td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <p>Nenhum visitante encontrado!</p>
                      <Link
                        className="hover:underline"
                        href={"/dashboard/visitantes/register"}>
                        Clique aqui para cadastrar!
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3"></td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
