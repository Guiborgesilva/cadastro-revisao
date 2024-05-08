"use client"

import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ripple } from "react-ripple-click"
import clsx from "clsx"

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon
  },
  {
    name: "Revisionistas",
    href: "/dashboard/revisionistas",
    icon: UserGroupIcon
  },
  {
    name: "Visitantes",
    href: "/dashboard/visitantes",
    icon: UserGroupIcon
  },
  {
    name: "Usuários",
    href: "/dashboard/usuarios",
    icon: UserGroupIcon
  }
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:bg-slate-700 dark:hover:bg-blue-800 dark:hover:text-sky-100 md:flex-none md:justify-start md:p-2 md:px-3 relative overflow-hidden isolate",
              {
                "bg-sky-100 text-blue-600 dark:text-sky-400 relative overflow-hidden isolate":
                  pathname === link.href
              }
            )}>
            <Ripple />
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
