import Image from "next/image";
import { ArrowRight, icons } from "lucide-react";
import image2 from "@/../public/home_image2.jpg"
import image1 from "@/../public/webinar.png"
import image3 from "@/../public/home_image3.png"
import image4 from "@/../public/image1.png"

import icon1 from "@/../public/search_icon.svg";
import icon2 from "@/../public/material_handling_icon.svg";
import icon3 from "@/../public/assembly_icon.svg";
import icon4 from "@/../public/machine_icon.svg";
import icon5 from "@/../public/palletizing_icon.svg"
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <div className="py-4 font-geist" id="consultation">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10">
        <div className="2xl:px-12 md:px-10 px-5 mx-auto md:mx-0 py-10 md:py-20">
          <p className="text-[#232323] font-medium text-sm mb-3">
            Our Philosophy. Engineered for the World.
          </p>
          <h1 className="text-3xl lg:text-6xl 2xl:text-6xl md:max-w-6xl max-w-2xl md:leading-18 mb-6">
            Simple, cost-effective <br />
            automation solutions. <br />
            Indigenous robotics <br /> without boundaries.
          </h1>
          <p className="text-[#6D6D6D] text-md md:text-lg pb-6 max-w-xl">
            We believe advanced robotics should be accessible, adaptable, and
            locally supported. That’s why we build indigenous systems that lead
            the way—no steep import dependencies, no support delays, just pure
            performance.{" "}
          </p>
          <p className="text-[#6D6D6D] text-md md:text-lg  mb-6 max-w-xl">
            Whether you’re assembling, packaging, or running quality control,
            our robots feel natural to operate, fast to deploy, and reliable to
            maintain. Request a consultation to see how we can tailor a system
            to your line.{" "}
          </p>
          <div className="w-fit mt-8 md:mt-12">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 flex items-center  gap-1 text-[#FFFFFF] font-medium px-5 py-2 mb-4 text-md  md:text-lg">
                Request Free Consultation <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex  md:-right-1 2xl:-right-35 relative py-5 md:py-0">
          <div className="md:hidden w-72 aspect-[1/1] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image1}
              alt="Customizable Cobots"
              fill
              className="object-cover"
            />
          </div>
          <div className="-top-30 relative">
            <div className="hidden md:flex flex-col relative">
              <div className="flex m-0 p-0">
                <div className="relative w-80 aspect-[1/1] clip-hex overflow-hidden group">
                  <Image
                    src={image2}
                    alt="Customizable Cobots"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-black/40 flex flex-col p-4 opacity-100"></div> */}
                </div>

                <div className="w-80 aspect-[1/1] clip-hex overflow-hidden group  absolute left-72">
                  <Image
                    src={image4}
                    alt="Robot 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center p-0 m-0">
                <div className=" w-80 aspect-[1/1] clip-hex overflow-hidden group absolute left-36 top-62 ">
                  <Image
                    src={image1}
                    alt="Robot 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className=" w-80 aspect-[1/1] clip-hex overflow-hidden group absolute -right-108 top-62">
                  <Image
                    src={image3}
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
        <div className="mx-auto w-2/3 text-[#232323]  font-medium mt-0 md:mt-10 flex justify-between mb-10 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={icon1}
              alt="image1"
              width={50}
              height={50}
            />
            <p className="bg-gray-200 px-3 py-1 text-sm rounded-xl">
              Inspection
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Image
              src={icon2}
              alt="image1"
              width={50}
              height={50}
            />
            <p className="bg-gray-200 text-[#232323] text-sm px-3 py-1 rounded-xl">
              Material Handling
            </p>
          </div>
          <div className="flex flex-col text-sm items-center justify-center gap-2">
            <Image
              src={icon3}
              alt="image1"
              width={50}
              height={50}
            />
            <p className="bg-gray-200 text-[#232323] px-3 py-1  text-sm rounded-xl">
              Assembly
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={icon4}
              alt="image1"
              width={50}
              height={50}
            />
            <p className="bg-gray-200 text-sm px-3 py-1 rounded-xl">
              Machine Tending
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={icon5}
              alt="image1"
              width={50}
              height={50}
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
