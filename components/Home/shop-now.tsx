import Image from "next/image";
import Button from "../button";
import ShopNowImage from "@/public/assets/Group 3.png";

export default function ShopNow() {
  return (
    <section className="text-primaryBlue px-6 md:px-10 lg:px-24 xl:px-40 md:my-20 flex flex-col md:flex-row gap-20 lg:gap-20 items-center justify-between">
      <div className="relative md:w-1/2">
        <Image src={ShopNowImage} alt="Avatar" />
        <p className="bg-white text-[#4D533C] px-4 py-3 lg:py-5 lg:px-8 text-[10px] lg:text-base rounded absolute -bottom-5 right-0 md:-bottom-6 md:-right-6 lg:-bottom-5 lg:-right-8 2xl:-bottom-10 2xl:right-20 drop-shadow-[50px_50px_100px_rgba(0,0,0,0.15)]">
          😊  Promotes calm and relaxation. <br />
          💤  Inhalation allows for a rapid effect. <br />
          ✅  100% drug-free, plant-based ingredients. <br />
          ‍⚕️  3rd-party lab tested.
        </p>
      </div>
      <div className="space-y-3 md:space-y-6 lg:space-y-8 md:w-1/2 2xl:w-2/5">
        <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold">Shop Now</h3>
        <p className="text-sm lg:text-base lg:pr-14 2xl:pr-18 text-primaryBlueLight">
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <Button text="Visit Shop" />
      </div>
    </section>
  )
}
