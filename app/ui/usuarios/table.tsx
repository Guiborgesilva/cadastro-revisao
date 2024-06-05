import Link from "next/link"
import { fetchFilteredUsuarios } from "@/app/lib/actions"
import { initials, nomeSobrenome } from "@/app/lib/utils"
import { Actions } from "@/app/ui/usuarios/actions"

export default async function UsuariosTable({
  query,
  currentPage
}: {
  query: string
  currentPage: number
}) {
  const usuarios = await fetchFilteredUsuarios(query, currentPage)

  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 dark:bg-slate-700 p-2 md:pt-0">
            <div className="md:hidden">
              {usuarios?.length > 0 ? (
                usuarios.map((usuario) => (
                  <div
                    key={usuario.id}
                    className="mb-2 w-full rounded-md bg-white dark:bg-slate-500 p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p className="size-10 rounded-full text-black bg-sky-100 dark:bg-slate-300 dark:text-black grid place-items-center font-bold">
                            {initials(usuario.name)}
                          </p>
                          <p className="text-black text-xl ml-2 dark:text-white">
                            {nomeSobrenome(usuario.name)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div>
                        <p className="flex flex-col">
                          <span className="text-md text-black dark:text-slate-300">
                            Email:
                          </span>
                          <span className="text-sm">{` ${
                            usuario.email.split("@")[0]
                          }`}</span>
                          <span className="text-xs">{`@${
                            usuario.email.split("@")[1]
                          }`}</span>
                        </p>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Actions
                          id={usuario.id}
                          nome={usuario.name}
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
                    <p>Nenhum usuário encontrado!</p>
                    <Link
                      className="hover:underline"
                      href={"/dashboard/usuarios/register"}>
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="relative py-3 pl-6 pr-3">
                    <span className="font-normal">Ações</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-500">
                {usuarios?.length > 0 ? (
                  usuarios.map((usuario) => (
                    <tr
                      key={usuario.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <p className="size-10 rounded-full grid place-items-center bg-sky-100 text-black dark:bg-slate-300 dark:text-black font-bold">
                            {initials(usuario.name)}
                          </p>
                          <p>{nomeSobrenome(usuario.name)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {usuario.email}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-6">
                        <div className="flex justify-end gap-3">
                          <Actions
                            id={usuario.id}
                            nome={usuario.name}
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
                      <p>Nenhum usuário encontrado!</p>
                      <Link
                        className="hover:underline"
                        href={"/dashboard/usuarios/register"}>
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
