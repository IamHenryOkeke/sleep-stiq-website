import Image from "next/image";
import Button from "../button";
import ShopNowImage from "@/public/assets/Group 3.png";

export default function Shop() {
  return (
    <section className="text-primaryBlue px-6 md:px-10 lg:px-24 xl:px-40 mt-20 md:my-20 flex flex-col md:flex-row gap-20 lg:gap-20 items-center justify-between">
      <div className="md:w-1/2">
        <Image src={ShopNowImage} alt="Avatar" />
      </div>
      <div className="space-y-3 md:space-y-5 md:w-1/2 2xl:w-2/5">
        <h3 className="mb-10 text-3xl md:text-2xl lg:text-4xl font-bold">About Product</h3>
        <p className="text-sm lg:text-base lg:pr-14 2xl:pr-18 text-primaryBlueLight">
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <p className="">
          😊  Promotes calm and relaxation. <br />
          💤  Inhalation allows for a rapid effect. <br />
          ✅  100% drug-free, plant-based ingredients. <br />
          ‍⚕️  3rd-party lab tested.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-14">
            <p>Price</p>
            <p>Unit</p>
          </div>
          <div className="font-bold flex items-center gap-10">
            <p>USD 50</p>
            <input type="number" min={0} max={10} value={2} className="w-16 pl-2 py-1 border rounded focus:outline-none" />
          </div>
        </div>
        <Button text="Buy" />
      </div>
    </section>
  )
}
