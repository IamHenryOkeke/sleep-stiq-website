import Image from 'next/image'
import MissionImage from '@/public/assets/Image(1).png';
import { GiCheckMark } from "react-icons/gi";

export default function OurMission() {
  return (
    <section className='px-4 md:px-10 lg:px-24 xl:px-40 my-40 flex flex-col items-center gap-10 lg:gap-52 md:flex-row-reverse'>
      <div className='-mx-4 md:-mr-10 lg:-mr-24 xl:-mr-40 md:w-1/2 lg:w-3/4'>
        <Image src={MissionImage} alt='' className='w-full h-full' />
      </div>
      <div className='text-primaryBlueLight text-sm md:text-base space-y-4 md:space-y-6 lg:space-y-8 md:w-1/2'>
        <h3 className="text-primaryBlue text-3xl md:text-2xl lg:text-4xl font-bold">Our Mission</h3>
        <p className='2xl:pr-[70px]'>
          We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That&apos;s why we created products that aim to -
        </p>
        <div>
          <span className='flex items-center gap-2'>
            <GiCheckMark /> Promote Calm
          </span>
          <span className='flex items-center gap-2'>
            <GiCheckMark /> Support Sleep
          </span>
          <span className='flex items-center gap-2'>
            <GiCheckMark /> Reduce Stress
          </span>
          <span className='flex items-center gap-2'>
            <GiCheckMark /> Aid Relaxation
          </span>
        </div>
      </div>
    </section>
  )
}
