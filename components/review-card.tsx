import { FaStar } from "react-icons/fa6";

export default function ReviewCard({ review, reviewAuthor }: { review: string, reviewAuthor: string }) {
  return (
    <div className='rounded-lg text-[#4D533C] flex flex-col gap-5 justify-between bg-[#FBF9F2] p-6 w-[306px]'>
      <p className="italic">{review}</p>
      <div className='flex flex-col gap-2'>
        <span className="font-bold">{reviewAuthor}</span>
        <div className='flex items-center gap-1.5 text-primaryGreen'>
          <FaStar size={13} />
          <FaStar size={13} />
          <FaStar size={13} />
          <FaStar size={13} />
          <FaStar size={13} />
        </div>
      </div>
    </div>
  )
}
