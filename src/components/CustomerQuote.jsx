import Image from "next/image";
import robot from "../../public/robot3.png";
import { ArrowRight } from "lucide-react";

export default function CustomerQuote() {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#F5F5F5] ">
      <div className="w-full  flex flex-col justify-center  px-6 py-10 md:px-16">
        <p className="hidden md:flex text-sm text-[#000000] mb-3">
          Indigenous Platform
        </p>

        <h1 className="hidden md:flex text-3xl sm:text-4xl md:text-6xl text-[#232323] font-normal leading-tight mb-6">
          One Platform.
          <br /> Infinit Applications. <br /> Build your custom <br/>system with us.
        </h1>

        <p className="text-[#6D6D6D] text-sm md:text-base max-w-xl mb-8">
          Define your payload, reach, and tasks, and we’ll co‑create a
          right‑sized platform—integrating cobots, UGVs/AMRs, and vision
          systems—built around your process and space. We deliver one package
          with controls and data built in for faster deployment, higher
          throughput, and sustained performance.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 flex items-center mx-auto md:mx-0 gap-1 text-white font-medium px-5 py-2  w-fit mb-4 text-sm sm:text-base">
          Request Custom Quote <ArrowRight size={18} />
        </button>
      </div>

      <div className="w-full md:w-11/12 relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 left-1/12">
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
