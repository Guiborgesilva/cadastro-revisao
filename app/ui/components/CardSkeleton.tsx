import Skeleton from 'react-loading-skeleton'

export default function CardSkeleton(){
  return(
    <div className="flex flex-col md:flex-row md:gap-2">
        {Array.from({ length: 2 }, (_, index) => (
          <div className="flex-1" key={index}>
            <Skeleton
              count={3}
              height={61.5}
              className="mb-1"
              width={314}
              baseColor="#b4b4b4"
              highlightColor="#dadada"
              borderRadius={10}
            />
          </div>
        ))}
      </div>
  )
}