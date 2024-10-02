import Image from "next/image";
import FooterImage from "@/public/assets/Group(1).svg";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primaryBlue text-sm md:text-base py-10 px-6 lg:px-20 text-white">
      <Image src={FooterImage} alt="Footer Logo" className="mx-auto" />
      <div className="my-10 flex flex-col lg:flex-row gap-10 justify-between">
        <div className="flex justify-between gap-5 lg:gap-10">
          <div>
            <h3 className="font-semibold mb-5">COMPANY</h3>
            <div className="text-[#ABABAB] flex flex-col gap-2 lg:gap-4">
              <Link href="">About</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact</Link>
              <Link href="">Jobs</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-5">CONTACT</h3>
            <div className="flex flex-col gap-2 lg:gap-4 lg:w-[265px]">
              <span className="text-[#ABABAB]">Phone</span>
              <span className="font-semibold">+234 708 507 3128</span>
              <span className="text-[#ABABAB]">Address</span>
              <span className="font-semibold">16, Ogindipe Close, Upston  Close</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-5">CONSUMER ADVISORY</h3>
          <div className="flex flex-col gap-4 lg:w-[463px]">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
            </p>
            <p>
              By using our website or product, you agree to follow our <span className="text-blue-400">terms of service.</span>
            </p>
          </div>
        </div>
        <div className="border border-[#5D6544] h-[210px] hidden lg:block">
        </div>
        <hr className="border-[#5D6544] lg:hidden" />
        <div>
          <h3 className="font-semibold mb-5">GET IN TOUCH</h3>
          <div className="flex flex-col gap-4 lg:space-y-3 2xl:space-y-5 text-[#ABABAB]">
            <p className="lg:pr-10 2xl:pr-20">
              Feel free to get in touch with us via email
            </p>
            <p className="font-bold lg:text-2xl text-white">
              hello@sleepstiq.com
            </p>
            <div className="flex gap-3 items-center text-primaryBlue">
              <div className="bg-[#8FE2FF] rounded-full p-2.5">
                <TiSocialFacebook className="h-6 w-6" />
              </div>
              <div className="bg-[#8FE2FF] rounded-full p-2.5">
                <FaTwitter className="h-6 w-6" />
              </div>
              <div className="bg-[#8FE2FF] rounded-full p-2.5">
                <IoLogoGoogleplus className="h-6 w-6" />
              </div>
              <div className="bg-[#8FE2FF] rounded-full p-2.5">
                <FaLinkedinIn className="h-6 w-6" />
              </div>
            </div>
            <p>
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
