import Image from "next/image";
import robot from "../../public/robot3.png";
import { ArrowRight } from "lucide-react";

export default function CustomerQuote() {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#F5F5F5] ">
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-6 py-10 md:px-16">
        <p className="text-sm text-[#000000] mb-3">Indigenous Platform</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#232323] font-normal leading-snug mb-6">
          One Platform.<br/> Infinit Applications. <br /> Unstoppable
          Automation.
        </h1>

        <p className="text-gray-500 text-xs md:text-sm max-w-xl mb-8">
          Select your payload, define your reach, and watch your automation goals
          come alive. Our customizable Cobots, UGVs, and Vision Systems are
          designed to streamline your industrial workflow and supercharge your
          productivity.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-1 text-white font-medium px-5 py-2  w-fit mb-4 text-sm sm:text-base">
          Get a Custom Quote <ArrowRight size={18} />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-11/12 relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 left-1/3">
          <Image
            src={robot}
            alt="Customer Quote Expo"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
      </div>
    </div>
  );
}
