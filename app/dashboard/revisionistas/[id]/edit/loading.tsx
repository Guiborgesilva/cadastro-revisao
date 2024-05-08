import { EditFormSkeleton } from "@/app/ui/Skeletons"

export default function Loading() {
  let content

  content = (
    <>
      <div className="rounded-md bg-gray-50 dark:bg-slate-700 p-4 md:p-6 shadow-md">
        <form>
          {[...Array(15)].map((_, index) => (
            <EditFormSkeleton key={index} />
          ))}
        </form>
      </div>
      <button
        className="
        w-[146px]
        h-10
        mt-4
        rounded
        transition-all
        nameLine
      "></button>
      <button
        className="
        px-14
        h-10
        mt-4
        ml-4
        rounded
        transition-all
        nameLine
      "></button>
    </>
  )

  return <main>{content}</main>
}
