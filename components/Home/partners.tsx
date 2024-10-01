import Image from "next/image";
import Google from "@/public/assets/google2.0.0 1.svg";
import Forbes from "@/public/assets/PngItem_272311 1.svg";
import Bloomberg from "@/public/assets/PngItem_2146723 1.svg";
import SleepReview from "@/public/assets/Sleep-Review-Magazine-Logo 1.svg";
import Influencive from "@/public/assets/Logo_Black_Large_Slogan_newfont2 1.svg";

export default function Partners() {
  return (
    <section className='bg-white translate-y-52 lg:translate-y-60 -mx-4 md:-mr-10  lg:-mr-24 xl:-mr-32 flex items-center justify-between drop-shadow-[50px_50px_100px_rgba(0,0,0,0.15)] rounded-sm py-5 lg:py-10 px-3 md:px-10 lg:px-20'>
      <Image src={Google} alt="Google logo" className="w-14 md:w-[100px] md:h-12 lg:h-fit lg:w-fit" />
      <Image src={Forbes} alt="Forbes logo" className="w-14 md:w-[100px] md:h-12 lg:h-fit lg:w-fit" />
      <Image src={Bloomberg} alt="Bloomberg logo" className="w-14 md:w-[100px] md:h-12 lg:h-fit lg:w-fit" />
      <Image src={SleepReview} alt="Sleepreview logo" className="w-14 md:w-[100px] md:h-12 lg:h-fit lg:w-fit" />
      <Image src={Influencive} alt="Influencive logo" className="w-14 md:w-[100px] md:h-12 lg:h-fit lg:w-fit" />
    </section>
  )
}
