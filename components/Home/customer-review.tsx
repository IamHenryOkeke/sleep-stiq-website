import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import Avatar from "@/public/assets/Mask Group.svg";
import ReviewCard from "../review-card";

export default function CustomerReview() {
  return (
    <section className="text-primaryBlue px-6 md:px-10 lg:px-24 xl:px-40 my-32 md:mt-60 mb:mb-30">
      <div className="mb-28 flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-20 items-center justify-between">
        <div className="space-y-3 md:space-y-6 md:w-1/2 2xl:w-2/5">
          <p className="text-sm lg:text-base">Our Amazing Story</p>
          <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold">10k+ Happy Customers</h3>
          <p className="lg:pr-10 2xl:pr-0">There&apos;s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
          <div>
            <Link href="/about" className="font-bold underline hover:no-underline flex items-center"><FaCaretRight size={20} /> More know About us</Link>
          </div>
        </div>
        <div className="px-10 space-y-14 lg:space-y-32 py-10 lg:py-16 md:w-1/2 2xl:w-2/5 bg-[#FBF9F2] drop-shadow-[0px_100px_100px_rgba(0,0,0,0.15)]">
          <p className="italic text-base lg:text-2xl">
            I&apos;m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.
          </p>
          <div className="flex items-center gap-7">
            <div className='h-12 w-12 rounded-full'>
              <Image src={Avatar} alt="Avatar" className='w-full h-full rounded-full' />
            </div>
            <div>
              <h3 className='font-semibold'>James Miller</h3>
              <p className='text-sm 2xl:text-base'>CEO, Techbias</p>
            </div>
          </div>
        </div>
      </div>
      <div className='-mr-6 md:-mr-10 lg:-mr-40 overflow-x-scroll'>
        <div className='w-fit py-5 flex gap-5 lg:gap-10 pr-5 md:pr-10 lg:pr-32'>
          <ReviewCard review="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more." reviewAuthor="John Matthews" />
          <ReviewCard review="I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq." reviewAuthor="Eunice Oliver" />
          <ReviewCard review="It's a really good product and helps me sleep better at night!" reviewAuthor="Laura Davies" />
          <ReviewCard review="Helps me relax and remember to breathe. Stress level definitely goes down" reviewAuthor="Femi Ciroma" />
          <ReviewCard review="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more." reviewAuthor="John Matthews" />
        </div>
      </div>
    </section>
  )
}
