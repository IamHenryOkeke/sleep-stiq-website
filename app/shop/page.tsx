import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CustomerReview from "@/components/Shop/customer-review";
import Hero from "@/components/Shop/hero";
import Shop from "@/components/Shop/shop";


export const metadata: Metadata = {
  title: "Shop | Sleepstiq",
  description: "Let's help you Relax & Rest",
};

export default function page() {
  return (
    <main>
      <div className="px-4 md:px-10 lg:px-24 xl:px-32 pb-44 bg-center bg-cover bg-no-repeat h-[65vh] lg:h-[90vh] bg-[url('/assets/SliderShop.png')]">
        <Navbar />
        <Hero />
      </div>
      <Shop />
      <CustomerReview />
      <Footer />
    </main>
  )
}
