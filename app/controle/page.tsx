import Link from 'next/link'
import { quicksand } from '../ui/fonts'
import Search from "@/app/ui/search"
import PessoasTable from "@/app/ui/pessoas/table"
import { Suspense } from 'react'
// import CardSkeleton from '../ui/components/CardSkeleton'
import { fetchPessoasPages } from '../lib/actions'
import Pagination from '../ui/components/pagination'
import { CardsSkeleton } from "../ui/skeletons"
// import { signOut } from "@/thingstodo/auth"
// import { PowerIcon } from "@heroicons/react/24/outline"

export default async function Page({
  searchParams,
    }: {
      searchParams?: {
      query?: string;
      page?: string;
    };
    }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPessoasPages(query);

  return (
    <div className="w-full text-white flex justify-center items-center pt-10">
      <div>
        <h1 className={`mb-8 text-5xl text-center font-medium animate-up ${quicksand.className}`}>
          CONTROLE
        </h1>
        {/* <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
        <div className="
        bg-[#1E1E1E]
          px-8 rounded-[10px]
          py-10
          my-10
          w-[370px]
          md:w-[700px]
          animate-up
          "
        >
          <div className="flex justify-between md:justify-normal md:gap-10 items-center mb-8">
            <Link href={{ pathname:'/' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            </Link>
            <Search placeholder="Quem você procura?" />
          </div>
        <div
          className="
            flex
            flex-col
            md:grid
            md:grid-cols-2
            gap-2
          "
        >
          <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
            <PessoasTable query={query} currentPage={currentPage} />
          </Suspense>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
        </div>
      </div>
    </div>
  )
}
