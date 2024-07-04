"use client"

import { HomeIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/solid"
import {
  HomeIcon as HomeOut,
  UserGroupIcon as UserGroupOut,
  UsersIcon as UsersOut
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ripple } from "react-ripple-click"
import clsx from "clsx"

const links = [
  {
    name: "Home",
    href: "/dashboard",
    iconOut: HomeOut,
    iconSolid: HomeIcon,
    subtitle: "Home"
  },
  {
    name: "Revisionistas",
    href: "/dashboard/revisionistas",
    iconOut: UserGroupOut,
    iconSolid: UserGroupIcon,
    subtitle: "Revisão"
  },
  {
    name: "Visitantes",
    href: "/dashboard/visitantes",
    iconOut: UserGroupOut,
    iconSolid: UserGroupIcon,
    subtitle: "Visitantes"
  },
  {
    name: "Usuários",
    href: "/dashboard/usuarios",
    iconOut: UsersOut,
    iconSolid: UsersIcon,
    subtitle: "Usuários"
  }
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href
        const LinkIcon = isActive ? link.iconSolid : link.iconOut
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-col h-[70px] grow items-center justify-center gap-2 rounded bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 dark:bg-slate-700 dark:hover:bg-blue-800 dark:hover:text-sky-100 md:flex-none md:justify-start md:p-2 md:px-3 relative overflow-hidden isolate",
              {
                "bg-sky-100 text-blue-600 dark:text-sky-400 relative overflow-hidden isolate":
                  pathname === link.href
              }
            )}>
            <Ripple />
            <LinkIcon className="w-6" />
            <p className="text-xs">{link.subtitle}</p>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
