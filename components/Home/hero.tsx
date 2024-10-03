import Link from 'next/link';
import Button from '../button';

export default function Hero() {
  return (
    <section className='pt-20 md:py-20 space-y-6 lg:space-y-8 text-primaryBlue w-5/6 lg:w-[46%]'>
      <p className='md:text-lg'>We&apos;re here to help you</p>
      <h3 className='text-4xl md:text-6xl font-bold'>Relax & Rest</h3>
      <p className='md:text-lg'>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>
      <div>
        <Link href="/shop">
          <Button text='Visit Shop' />
        </Link>
      </div>
    </section>
  )
}
