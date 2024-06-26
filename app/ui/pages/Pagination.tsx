"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"
import { generatePagination } from "@/app/lib/utils"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const allPages = generatePagination(currentPage, totalPages)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined

            if (index === 0) position = "first"
            if (index === allPages.length - 1) position = "last"
            if (allPages.length === 1) position = "single"
            if (page === "...") position = "middle"

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            )
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position
}: {
  page: number | string
  href: string
  position?: "first" | "last" | "middle" | "single"
  isActive: boolean
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l": position === "first" || position === "single",
      "rounded-r": position === "last" || position === "single",
      "z-10 dark:bg-white bg-blue-600 dark:text-black text-white transition-all":
        isActive,
      "dark:bg-transparent bg-gray-200 hover:bg-gray-300 dark:text-white dark:hover:bg-white dark:hover:text-black":
        !isActive && position !== "middle",
      "dark:text-black cursor-default dark:bg-transparent":
        position === "middle"
    }
  )

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link
      href={href}
      className={className}>
      {page}
    </Link>
  )
}

function PaginationArrow({
  href,
  direction,
  isDisabled
}: {
  href: string
  direction: "left" | "right"
  isDisabled?: boolean
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded border",
    {
      "pointer-events-none dark:text-gray-300 text-gray-500 dark:border-gray-600 border-gray-300":
        isDisabled,
      "dark:bg-transparent bg-sky-100 hover:bg-sky-200 dark:hover:bg-white dark:border-white dark:hover:text-black transition-all":
        !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right"
    }
  )

  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link
      className={className}
      href={href}>
      {icon}
    </Link>
  )
}
