import Image from "next/image";
import product1 from "../../public/product1.png";
import product2 from "../../public/product2.png";
import product3 from "../../public/product3.png";
import robot from "../../public/robot3.png";
import webinar from "../../public/webinar.png";
import { ArrowRight } from "lucide-react";

export default function CustomerQuote() {
  return (
    <div className="w-full flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 py-10 md:px-16">
        <p className="text-sm text-[#000000] mb-3">Indigenous Platform</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug mb-6">
          One Platform. Infinite <br /> Applications. <br /> Unstoppable
          Automation.
        </h1>

        <p className="text-gray-500 text-xs md:text-sm  max-w-xl mb-8">
          Select your payload, define your reach, and watch your automation goals
          come alive. Our customizable Cobots, UGVs, and Vision Systems are
          designed to streamline your industrial workflow and supercharge your
          productivity.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-1 text-white font-medium px-5 py-2 rounded-md w-fit mb-4 text-sm sm:text-base">
          Get a Custom Quote <ArrowRight size={18} />
        </button>

        <div className="flex flex-wrap gap-4 justify-start">
          <Image src={product1} alt="Robot 1" className="h-20 w-auto sm:h-24" />
          <Image src={product2} alt="Robot 2" className="h-20 w-auto sm:h-24" />
          <Image src={product3} alt="Robot 3" className="h-20 w-auto sm:h-24" />
        </div>
      </div>

      <div className="w-full md:w-1/2  relative">
        <Image
          src={robot}
          alt="Customer Quote Expo"
          className="w-full h-full object-cover opacity-50"
          priority
        />

        <div className="absolute bottom-0 w-full h-1/2 sm:h-2/3 overflow-hidden">
          <Image
            src={webinar}
            alt="Webinar"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
}
