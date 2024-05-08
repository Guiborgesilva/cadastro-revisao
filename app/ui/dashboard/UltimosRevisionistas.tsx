import { ArrowPathIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"
import { fetchUltimosRevisionistas } from "@/app/lib/data"
import { initials } from "@/app/lib/utils"

export default async function UltimosRevisionistas() {
  const ultimosRevisionistas = await fetchUltimosRevisionistas()
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        Revisionistas
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl dark:bg-slate-700 bg-gray-50 p-4">
        <div className="bg-white dark:bg-slate-500 px-6">
          {ultimosRevisionistas.map((revisionista, i) => {
            return (
              <div
                key={revisionista.id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t": i !== 0
                  }
                )}>
                <div className="flex items-center">
                  <p
                    className="
                      p-2
                      rounded-full
                      bg-sky-100
                      dark:bg-slate-200
                      dark:text-black
                      mr-4
                      size-10
                      text-center
                      font-bold
                    ">
                    {initials(revisionista.nome_pessoa)}
                  </p>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-normal md:text-base dark:text-white">
                      {revisionista.nome_pessoa}
                    </p>
                    <p className="hidden text-sm text-gray-500 dark:text-white/30 sm:block">
                      {revisionista.lider_equipe}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500 dark:text-white/30" />
          <h3 className="ml-2 text-sm text-gray-500 dark:text-white/30">
            Atualizado agora
          </h3>
        </div>
      </div>
    </div>
  )
}
