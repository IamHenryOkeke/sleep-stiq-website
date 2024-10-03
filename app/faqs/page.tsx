import FAQ from '@/components/FAQs/faqs';
import Hero from '@/components/FAQs/hero';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function page() {
  return (
    <main>
      <div className="px-4 md:px-10 lg:px-24 xl:px-32 pb-44 h-full bg-[#FBF9F2]">
        <Navbar />
        <Hero />
      </div>
      <FAQ />
      <Footer />
    </main>
  )
}
