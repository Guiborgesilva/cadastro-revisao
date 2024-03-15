export default function CardSkeleton() {
  return (
    <>
    <div
      className="
        animate-pulse
        w-full
        h-[77.5px]
        p-2
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
          <div className="flex justify-start p-2">
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
              <div className="flex justify-start flex-col gap-2">
                <p className="justify-start w-44 h-3 rounded-md bg-gray-200"></p>
                <p className="justify-end w-24 rounded-md h-3 bg-gray-200"></p>
              </div>
            </div>
          </div>
          <div
            className="
              mr-1
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