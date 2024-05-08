export default function CardSkeleton() {
  return (
    <>
      <div
        className="
          w-full
          h-[77.5px]
          p-2
          border
          border-gray-200
          rounded-lg
          flex
          flex-col
          gap-2
          items-center
          justify-center
        ">
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-start p-2">
            <div
              className="
                initials
                rounded-full
                size-10
                bg-gray-200
                flex
                justify-center
                items-center
                "></div>
            <div className="ml-3">
              <div className="flex justify-start flex-col gap-2">
                <p
                  className="
                      nameLine
                      justify-start
                      w-44
                      h-3
                      rounded-md
                      bg-gray-200
                    "></p>
                <p
                  className="
                      teamLine
                      justify-end
                      w-24
                      h-3
                      rounded-md
                      bg-gray-200
                    "></p>
              </div>
            </div>
          </div>
          <div
            className="
                actionsCircle
                mr-1
                size-7
                bg-gray-200
                rounded-full
              "></div>
        </div>
      </div>
    </>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

export function InputSkeleton() {
  return (
    <div
      className="
        flex
        flex-col
        gap-2
      ">
      <label
        className="
          nameLine
          w-[130px]
          py-2
          rounded
          transition-all
        "></label>
      <input
        className="
            text-black
            p-2
            mb-4
            rounded
            w-full
            nameLine
            transition-all
          "
        disabled
      />
    </div>
  )
}

export function InputEditSkeleton() {
  return (
    <div
      className="
        flex
        flex-col
        gap-2
      ">
      <label
        className="
          nameLine
          w-[130px]
          py-2
          rounded
          transition-all
        "></label>
      <input
        className="
            text-black
            p-2
            mb-4
            rounded
            w-full
            nameLine
            transition-all
          "
        disabled
      />
    </div>
  )
}

export function EditFormSkeleton() {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium w-[50px] py-2 rounded nameLine"></label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            type="text"
            disabled
            className="block w-full rounded  py-2 nameLine"
          />
        </div>
      </div>
    </div>
  )
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"

export function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardCountSkeleton />
        <CardCountSkeleton />
        <CardCountSkeleton />
        <CardCountSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevisionistasRecentesSkeleton />
        <VisitanteRecentesSkeleton />
      </div>
    </>
  )
}

export function CardCountSkeleton() {
  return (
    <div
      className={`${shimmer} relative w-[230px] overflow-hidden rounded-xl dark:bg-slate-700 bg-gray-100 p-2 shadow-sm`}>
      <div className="flex p-4 dark:bg-slate-700 rounded">
        <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-slate-300" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 dark:bg-slate-300 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white dark:bg-slate-400 px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200 dark:bg-slate-300" />
      </div>
    </div>
  )
}

export function CardsCountSkeleton() {
  return (
    <>
      <CardCountSkeleton />
      <CardCountSkeleton />
      <CardCountSkeleton />
      <CardCountSkeleton />
    </>
  )
}

export function RevisionistaSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200 dark:bg-slate-300" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200 dark:bg-slate-300" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-slate-300" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-slate-300" />
    </div>
  )
}

export function RevisionistasRecentesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100 dark:bg-slate-300" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 dark:bg-slate-700 p-4">
        <div className="bg-white dark:bg-slate-500 px-6">
          <RevisionistaSkeleton />
          <RevisionistaSkeleton />
          <RevisionistaSkeleton />
          <RevisionistaSkeleton />
          <RevisionistaSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-slate-300" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function VisitantestaSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200 dark:bg-slate-300" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200 dark:bg-slate-300" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-slate-300" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-slate-300" />
    </div>
  )
}

export function VisitanteRecentesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100 dark:bg-slate-300" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 dark:bg-slate-700 p-4">
        <div className="bg-white dark:bg-slate-500 px-6">
          <VisitantestaSkeleton />
          <VisitantestaSkeleton />
          <VisitantestaSkeleton />
          <VisitantestaSkeleton />
          <VisitantestaSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-slate-300" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function TableRowRevisionistasSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-6 w-28 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-64 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
    </tr>
  )
}

export function TableRowVisitantesSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Nome do visitante */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-6 w-32 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
      {/* Bairro */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-28 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Quem convidou */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-28 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Data de nasc. */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-24 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Sexo */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-28 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Ações */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
    </tr>
  )
}

export function TableRowUsuariosSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Nome do visitante */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-6 w-44 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-60 rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
      </td>
      {/* Ações */}
      <td className="whitespace-nowrap py-3 pr-6">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-slate-300 nameLine"></div>
        </div>
      </td>
    </tr>
  )
}

export function RevisionistasMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white dark:bg-slate-500 p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-4 size-10 rounded-full bg-gray-100 nameLine"></div>
          <div className="h-6 w-16 rounded bg-gray-100 nameLine"></div>
        </div>
        {/* <div className="h-6 w-16 rounded bg-gray-100 nameLine"></div> */}
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100 nameLine"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100 nameLine"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
        </div>
      </div>
    </div>
  )
}

export function VisitantesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white dark:bg-slate-500 p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-4 size-10 rounded-full bg-gray-100 nameLine"></div>
          <div className="h-6 w-40 rounded bg-gray-100 nameLine"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100 nameLine"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100 nameLine"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
        </div>
      </div>
    </div>
  )
}

export function UsuariosMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white dark:bg-slate-500 p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-4 size-10 rounded-full bg-gray-100 nameLine"></div>
          <div className="h-6 w-40 rounded bg-gray-100 nameLine"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="mt-2 h-6 w-52 rounded bg-gray-100 nameLine"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
          <div className="h-10 w-10 rounded bg-gray-100 nameLine"></div>
        </div>
      </div>
    </div>
  )
}

export function RevisionistasTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 dark:bg-slate-700 p-2 md:pt-0">
          <div className="md:hidden">
            <RevisionistasMobileSkeleton />
            <RevisionistasMobileSkeleton />
            <RevisionistasMobileSkeleton />
            <RevisionistasMobileSkeleton />
            <RevisionistasMobileSkeleton />
            <RevisionistasMobileSkeleton />
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
                  className="px-3 py-5 font-medium">
                  Equipe
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
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                  <span className="font-normal">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-500">
              <TableRowRevisionistasSkeleton />
              <TableRowRevisionistasSkeleton />
              <TableRowRevisionistasSkeleton />
              <TableRowRevisionistasSkeleton />
              <TableRowRevisionistasSkeleton />
              <TableRowRevisionistasSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function VisitantesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 dark:bg-slate-700 p-2 md:pt-0">
          <div className="md:hidden">
            <VisitantesMobileSkeleton />
            <VisitantesMobileSkeleton />
            <VisitantesMobileSkeleton />
            <VisitantesMobileSkeleton />
            <VisitantesMobileSkeleton />
            <VisitantesMobileSkeleton />
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
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                  <span className="font-normal">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-500">
              <TableRowVisitantesSkeleton />
              <TableRowVisitantesSkeleton />
              <TableRowVisitantesSkeleton />
              <TableRowVisitantesSkeleton />
              <TableRowVisitantesSkeleton />
              <TableRowVisitantesSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function UsuariosTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 dark:bg-slate-700 p-2 md:pt-0">
          <div className="md:hidden">
            <UsuariosMobileSkeleton />
            <UsuariosMobileSkeleton />
            <UsuariosMobileSkeleton />
            <UsuariosMobileSkeleton />
            <UsuariosMobileSkeleton />
            <UsuariosMobileSkeleton />
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
                  className="relative pb-4 pr-6 pt-2 sm:pr-6">
                  <span className="font-normal">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-500">
              <TableRowUsuariosSkeleton />
              <TableRowUsuariosSkeleton />
              <TableRowUsuariosSkeleton />
              <TableRowUsuariosSkeleton />
              <TableRowUsuariosSkeleton />
              <TableRowUsuariosSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
