import SideNav from "@/app/ui/pages/Sidenav"
import SideNavMobile from "@/app/ui/pages/SidenavMobile"
import Image from "next/image"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-full md:h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="md:hidden px-3 py-4">
          <Link
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
          </Link>
        </div>
        <div className="w-full flex-none md:w-64 hidden">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mb-24">
          {children}
        </div>
        <div className="w-full flex-none md:w-64 fixed bottom-0 z-50">
          <SideNavMobile />
        </div>
      </div>
    </>
  )
}
