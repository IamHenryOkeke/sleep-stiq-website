import ReviewCard from "../review-card";

export default function CustomerReview() {
  return (
    <section className="text-primaryBlue px-6 md:px-10 lg:px-24 xl:px-40 my-32">
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
