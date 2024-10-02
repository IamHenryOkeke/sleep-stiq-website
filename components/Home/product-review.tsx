import ProductReviewCard from "./product-review-card";

export default function ProductReview() {
  return (
    <section className="text-[#4D533C] px-6 md:px-10 lg:px-24 xl:px-40">
      <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold">Product Reviews</h3>
      <div className='-mr-6 md:-mr-10 lg:-mr-40 my-10 overflow-x-scroll pb-20'>
        <div className='w-fit py-5 flex gap-5 lg:gap-20 px-5 md:pr-10 lg:pr-32 z-50'>
          <ProductReviewCard review="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more." reviewAuthor="John Matthews"/>
          <ProductReviewCard review="I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq." reviewAuthor="Eunice Oliver"/>
          <ProductReviewCard review="It's a really good product and helps me sleep better at night!" reviewAuthor="Laura Davies"/>
          <ProductReviewCard review="Helps me relax and remember to breathe. Stress level definitely goes down" reviewAuthor="Femi Ciroma"/>
          <ProductReviewCard review="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more." reviewAuthor="John Matthews"/>
        </div>
      </div>
    </section>
  )
}
