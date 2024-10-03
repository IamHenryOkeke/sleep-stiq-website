import { IoSearchSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <section className='pt-20 md:py-20 space-y-6 lg:space-y-8 text-primaryBlue md:w-5/6 lg:w-3/5'>
      <p className='md:text-lg'>We&apos;re here to help you</p>
      <h3 className='text-4xl md:text-6xl font-semibold'>How can we assist?</h3>
      <div className="bg-white py-3 px-4 md:px-8 md:py-4 flex items-center gap-3 rounded-[10px]">
        <IoSearchSharp size={25} />
        <input type="text" className="w-full focus:outline-none" placeholder="Search FAQs here" />
      </div>
    </section>
  )
}