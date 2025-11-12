import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="md:px-20 px-6 py-10 md:py-20">
          <p className="text-[#000000] text-sm mb-3">
            Our Philosophy. Engineered for the World.
          </p>
          <h1 className="text-3xl md:text-6xl max-w-xl leading-tight mb-6">
            Simple, cost-effective <br />
            automation solutions. <br />
            Indigenous robotics without boundaries.
          </h1>
          <p className="text-[#6D6D6D] text-sm md:text-base mb-6 max-w-lg">
            We believe industrial automation should be accessible and adaptable.
            That’s why we build indigenous systems that lead the way—no steep
            import dependencies, no support delays, just pure performance.
            Whether you’re assembling, manufacturing, or performing quality
            control, our process feels natural, fast, and reliable.
          </p>
          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 flex items-center mx-auto md:mx-0 gap-1 text-white font-medium px-5 py-2  w-fit mb-4 text-sm sm:text-base">
              Request Free Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div className="flex  relative py-10 md:py-0">
          <div className="md:hidden w-72 aspect-[1/1] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/webinar.png"
              alt="Customizable Cobots"
              fill
              className="object-cover"
            />
          </div>
          <div className="-top-24  relative">
            <div className="hidden md:flex flex-col relative">
              <div className="flex m-0 p-0">
                <div className="relative w-72 aspect-[1/1] clip-hex overflow-hidden group">
                  <Image
                    src="/heroimage2.png"
                    alt="Customizable Cobots"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col p-4 opacity-100"></div>
                </div>

                <div className="w-72 aspect-[1/1] clip-hex overflow-hidden group  absolute left-64">
                  <Image
                    src="/image1.png"
                    alt="Robot 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center p-0 m-0">
                <div className=" w-72 aspect-[1/1] clip-hex overflow-hidden group absolute left-32 top-56 ">
                  <Image
                    src="/image2.png"
                    alt="Robot 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className=" w-72 aspect-[1/1] clip-hex overflow-hidden group absolute -right-96 top-57">
                  <Image
                    src="/image3.png"
                    alt="Robot 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex border-1 border-gray-200 w-full py-5 text-[#232323]">
        <div className="mx-auto w-2/3 flex justify-between mb-10 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className=" hover:scale-110 hover:bg-orange-200 hover:rounded-full hover:px-2 hover:py-2 transition-all duration-300 ease-in-out"
              src="/Gemini_Generated_Image_y9tu7sy9tu7sy9tu-removebg-preview.png-0 (SVG).png"
              alt="image1"
              width={70}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-xl">Inspection</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Image
              className=" hover:scale-110 hover:bg-orange-200 hover:rounded-full hover:px-2 hover:py-2 transition-all duration-300 ease-in-out"
              src="/Gemini_Generated_Image_thmtmfthmtmfthmt-removebg-preview 2.png-1 (SVG).png"
              alt="image1"
              width={70}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-xl">
              Material Handling
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className=" hover:scale-110 hover:bg-orange-200 hover:rounded-full hover:px-2 hover:py-2 transition-all duration-300 ease-in-out"
              src="/Frame 1000003840.png"
              alt="image1"
              width={70}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-xl">Assembly</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className=" hover:scale-110 hover:bg-orange-200 hover:rounded-full hover:px-2 hover:py-2 transition-all duration-300 ease-in-out"
              src="/container.png"
              alt="image1"
              width={70}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-xl">Machine Tending</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className=" hover:scale-110 hover:bg-orange-200 hover:rounded-full hover:px-2 hover:py-2 transition-all duration-300 ease-in-out"
              src="/Frame 1000003841.png"
              alt="image1"
              width={70}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-xl">Palletizing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
