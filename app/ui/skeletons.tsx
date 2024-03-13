export default function CardSkeleton() {
  return (
    <>
    <div
      className="
        animate-pulse
        w-[314px]
        h-[61.5px]
        p-4
        border
        border-gray-200
        rounded-lg
        flex
        flex-col
        gap-2
        items-center
        justify-center
      "
    >
      <div className="flex items-center justify-between w-full">
          <div className="flex justify-start">
            <div className="
              rounded-full
              size-10
              bg-gray-200
              flex
              justify-center
              items-center
              "
            ></div>
            <div className="ml-3">
              <div className="flex justify-start flex-col gap-4">
                <p className="justify-start w-44 h-3 rounded-md bg-gray-200">
                  
                </p>
                <p className="text-[13px] justify-end w-24 rounded-md h-3 bg-gray-200"></p>
              </div>
            </div>
          </div>
          <div
            className="
              size-7
              bg-gray-200
              rounded-full
            "
          ></div>
        </div>
    </div>
    </>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}