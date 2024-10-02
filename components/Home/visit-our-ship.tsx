import Button from "../button";

export default function VisitOurShop() {
  return (
    <section className='space-y-6 text-center px-4 md:px-10 lg:px-24 xl:px-40 my-40'>
      <h3 className="text-primaryBlue text-3xl md:text-2xl lg:text-4xl font-bold">Visit Our Shop</h3>
      <p className="text-sm lg:text-base text-primaryBlueLight mx-auto lg:w-5/6 2xl:w-3/4">
        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
      </p>
      <Button text="Visit Shop" />
    </section>
  )
}
