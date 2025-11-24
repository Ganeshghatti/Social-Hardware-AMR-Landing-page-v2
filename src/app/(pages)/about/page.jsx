import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <div className="py-8 font-geist">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="2xl:px-16 md:px-10 px-5 mx-auto md:mx-0 py-10 md:py-20">
          <p className="text-[#232323] font-medium text-sm mb-3">
            Our Philosophy. Engineered for the World.
          </p>
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl md:max-w-6xl max-w-xl leading-tight mb-6">
            Simple, cost-effective <br />
            automation solutions. <br />
            Indigenous robotics <br /> without boundaries.
          </h1>
          <p className="text-[#6D6D6D] text-sm md:text-base mb-6 max-w-xl">
            We believe advanced robotics should be accessible, adaptable, and
            locally supported. That’s why we build indigenous systems that lead
            the way—no steep import dependencies, no support delays, just pure
            performance.{" "}
          </p>
          <p className="text-[#6D6D6D] text-sm md:text-base mb-6 max-w-xl">
            Whether you’re assembling, packaging, or running quality control,
            our robots feel natural to operate, fast to deploy, and reliable to
            maintain. Request a consultation to see how we can tailor a system
            to your line.{" "}
          </p>
          <div className="w-fit">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 flex items-center  gap-1 text-white font-medium px-5 py-2 mb-4 text-sm sm:text-base">
                Request Free Consultation <ArrowRight size={18} />
              </button>
            </Link>
          </div>
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
                <div className="relative w-80 aspect-[1/1] clip-hex overflow-hidden group">
                  <Image
                    src="/08a656df6d37321563836e4c05b2a3b2eaf73263.jpg"
                    alt="Customizable Cobots"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-black/40 flex flex-col p-4 opacity-100"></div> */}
                </div>

                <div className="w-80 aspect-[1/1] clip-hex overflow-hidden group  absolute left-72">
                  <Image
                    src="/image1.png"
                    alt="Robot 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center p-0 m-0">
                <div className=" w-80 aspect-[1/1] clip-hex overflow-hidden group absolute left-36 top-62 ">
                  <Image
                    src="/webinar.png"
                    alt="Robot 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className=" w-80 aspect-[1/1] clip-hex overflow-hidden group absolute -right-108 top-62">
                  <Image
                    src="/dd742b64aede2d05ae65e82d00ca2bc224863134.png"
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
      <div className="hidden md:flex border-t-1 border-gray-200 w-full py-5 text-[#232323]">
        <div className="mx-auto w-2/3 mt-0 md:mt-10 flex justify-between mb-10 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/3de3f26c39b50a1ca4777861f39cc71a97ca65a1.png"
              alt="image1"
              width={50}
              height={40}
            />
            <p className="bg-gray-200 px-3 py-1 text-sm rounded-xl">
              Inspection
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Image
              src="/e99540f3ca9af8df2135b09ec4caacd4a47fa96b.png"
              alt="image1"
              width={30}
              height={30}
            />
            <p className="bg-gray-200 text-sm px-3 py-1 rounded-xl">
              Material Handling
            </p>
          </div>
          <div className="flex flex-col text-sm items-center justify-center gap-2">
            <Image
              src="/f65577d576288aa40c096b47573f3b3e9a51e10d.png"
              alt="image1"
              width={30}
              height={30}
            />
            <p className="bg-gray-200 px-3 py-1  text-sm rounded-xl">
              Assembly
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/ee34bc284bfcbccb991689c43e0fd5212e9b817f.png"
              alt="image1"
              width={30}
              height={30}
            />
            <p className="bg-gray-200 text-sm px-3 py-1 rounded-xl">
              Machine Tending
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/bdde462fbdf621d704a62fe2da0cb89504e3c0be.png"
              alt="image1"
              width={30}
              height={30}
            />
            <p className="bg-gray-200 text-sm px-3 py-1 rounded-xl">
              Palletizing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
