import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductImage from "@/public/assets/Rectangle 7.svg";

export default function ProductReviewCard({ review, reviewAuthor }: { review: string, reviewAuthor: string }) {
  return (
    <div className="w-[306px] h-[420px] bg-white rounded-lg shadow-[50px_70px_70px_rgba(0,0,0,0.15)]">
      <Image src={ProductImage} alt="product image" className="h-1/2"/>
      <div className='text-[#4D533C] h-1/2 flex flex-col gap-5 justify-between p-6'>
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
    </div>
  )
}
