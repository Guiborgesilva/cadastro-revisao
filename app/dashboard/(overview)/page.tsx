import CardWrapper from "@/app/ui/dashboard/Cards"
import {
  CardsCountSkeleton,
  RevisionistasRecentesSkeleton,
  VisitanteRecentesSkeleton
} from "@/app/ui/Skeletons"
import UltimosRevisionistas from "@/app/ui/dashboard/UltimosRevisionistas"
import UltimosVisitantes from "@/app/ui/dashboard/UltimosVisitantes"
import { inter } from "@/app/ui/fonts"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className={`${inter.className} w-full`}>
      <h1 className="mb-4 text-xl md:text-2xl">Painel de controle</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsCountSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevisionistasRecentesSkeleton />}>
          <UltimosRevisionistas />
        </Suspense>
        <Suspense fallback={<VisitanteRecentesSkeleton />}>
          <UltimosVisitantes />
        </Suspense>
      </div>
    </main>
  )
}
