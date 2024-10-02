import Footer from "@/components/footer";
import CustomerReview from "@/components/Home/customer-review";
import Hero from "@/components/Home/hero";
import OurMission from "@/components/Home/our-mission";
import Partners from "@/components/Home/partners";
import ProductReview from "@/components/Home/product-review";
import ShopNow from "@/components/Home/shop-now";
import VisitOurShop from "@/components/Home/visit-our-ship";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="relative px-4 md:px-10 lg:px-24 xl:px-32 pb-44 bg-center bg-cover bg-no-repeat h-full bg-[url('/assets/Slider.png')]">
        <Navbar />
        <Hero />
        <Partners />
      </div>
      <CustomerReview />
      <ShopNow />
      <OurMission />
      <VisitOurShop />
      <ProductReview />
      <Footer />
    </main>
  );
}
