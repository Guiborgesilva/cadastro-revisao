import Link from "next/link"
import NavLinks from "@/app/ui/pages/NavLinks"
import { Ripple } from "react-ripple-click"
import { PowerIcon } from "@heroicons/react/24/outline"
import { signOut } from "@/auth"
import Image from "next/image"
import Button from "@/app/ui/components/Buttons"

export default function SideNavMobile() {
  return (
    <div className="flex h-full flex-col backdrop-blur-md px-3 py-4 md:px-2">
      {/* <Link
        className="
          mb-2
          flex
          h-20
          items-center
          justify-center
          rounded-md
          bg-black
          p-4
          md:h-40"
        href="/">
        <div className="w-32 text-white md:w-40">
          <Image
            width={260}
            height={65}
            src="/logoSaraIcara.png"
            alt="Logo da Igreja Sara de Içara"
            priority={true}
          />
        </div>
      </Link> */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-slate-700 md:block"></div>
        <form
          action={async () => {
            "use server"
            await signOut()
          }}>
          <Button className="flex h-[70px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-slate-700 p-3 text-sm font-medium dark:hover:bg-blue-800 hover:bg-sky-100 hover:text-blue-600 dark:hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <Ripple />
            <div className="hidden md:block">Sign Out</div>
          </Button>
        </form>
      </div>
    </div>
  )
}
