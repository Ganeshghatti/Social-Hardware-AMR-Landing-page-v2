import Image from "next/image";
import robot from "../../public/robot3.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomerQuote() {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#F5F5F5] font-geist ">
      <div className="w-full  flex flex-col justify-center  px-6 py-10 lg:px-12 2xl:px-16">
        <p className="hidden md:flex text-sm text-[#000000] font-semibold mb-3">
          Indigenous Platform
        </p>

        <h1 className="hidden md:flex text-3xl sm:text-4xl md:text-6xl text-[#232323] font-normal leading-tight mb-6">
          One Platform.
          <br /> Infinit Applications. <br /> Build your custom <br />
          system with us.
        </h1>

        <p className="text-[#6D6D6D] text-sm md:text-base max-w-xl mb-8">
          Define your payload, reach, and tasks, and we’ll co‑create a
          right‑sized platform—integrating cobots, UGVs/AMRs, and vision
          systems—built around your process and space. We deliver one package
          with controls and data built in for faster deployment, higher
          throughput, and sustained performance.
        </p>

        <Link href="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 flex items-start  mb-8  gap-1 text-white font-medium px-5 py-2  w-fit md:mb-4 text-sm sm:text-base">
            Request Custom Quote <ArrowRight size={18} />
          </button>
        </Link>

        <div className="flex w-full mt-5 gap-8">
          <div className="flex flex-col items-center gap-2">
            <Image src="/Group 39860.png" alt="img" width={30} height={30} />
            <p className="bg-[#ECECEC] px-3 py-1 text-xs md:text-sm rounded-xl">Vision Systems</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/19bcc6113d823b106bb64f52f576400bb4e3a822.png" alt="img" width={30} height={30} />
            <p className="bg-[#ECECEC] px-3 py-1 text-xs md:text-sm rounded-xl">Vision Systems</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/monitor-mobbile.png"
              alt="img"
              width={30}
              height={30}
            />
            <p className="bg-[#ECECEC] px-3 py-1 text-xs md:text-sm rounded-xl">Vision Systems</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-full relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 md:left-1/12">
          <Image
            src={robot}
            alt="Customer Quote Expo"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="absolute bottom-0 bg-[#000000]/50 md:w-11/12 py-10 right-0">
          <p className="text-white w-full md:max-w-lg pl-6 md:pl-10">
            We can engineer custom cobots with the reach and payload your
            application demands. From compact 3 kg arms for delicate tasks to
            robust 20 kg systems for heavy-duty handling—and reaches up to 2000
            mm—we configure and optimize each robot for your exact requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
