import { fetchCardData } from "@/app/lib/data"
import { UserGroupIcon } from "@heroicons/react/24/outline"
import { inter } from "@/app/ui/fonts"

const iconMap = {
  visitantes: UserGroupIcon,
  revisionistas: UserGroupIcon,
}

export default async function CardWrapper() {
  const { numberOfRevisionistas, numberOfVisitantes } = await fetchCardData()
  return (
    <>
      <Card
        title="Total de Revisionistas"
        value={numberOfRevisionistas}
        type="revisionistas"
      />
      <Card
        title="Total de Visitantes"
        value={numberOfVisitantes}
        type="visitantes"
      />
    </>
  )
}

export function Card({
  title,
  value,
  type,
}: {
  title: string
  value: number | string
  type: "revisionistas" | "visitantes"
}) {
  const Icon = iconMap[type]

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-slate-700 p-2 dark:text-white text-gray-700 shadow-sm">
      <div className="flex p-4">
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-700 dark:text-white" />
        ) : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${inter.className}
          truncate rounded-xl bg-white dark:bg-slate-500 px-4 py-8 text-center text-2xl`}>
        {value}
      </p>
    </div>
  )
}
