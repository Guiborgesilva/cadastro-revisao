import Pagination from "@/app/ui/pages/Pagination"
import Search from "@/app/ui/search"
import Table from "@/app/ui/visitantes/table"
import { Cadastrar } from "@/app/ui/pages/CreateButton"
import { inter } from "@/app/ui/fonts"
import { Suspense } from "react"
import { VisitantesTableSkeleton } from "@/app/ui/Skeletons"
import { fetchVisitantesPages } from "@/app/lib/data"

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchVisitantesPages(query)

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${inter.className} text-2xl`}>Visitantes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Estou procurando..." />
        <Cadastrar title="Cadastrar visitante" />
      </div>
      <Suspense
        key={query + currentPage}
        fallback={<VisitantesTableSkeleton />}>
        <Table
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
