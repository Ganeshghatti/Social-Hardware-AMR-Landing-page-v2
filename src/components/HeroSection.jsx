import Image from "next/image";
import a1 from "../../public/heroimage2.png";
import a2 from "../../public/heroimage1.png";
import arrow from "../../public/arrow.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#E5E5E5]">
      <div className="mx-auto flex flex-col md:flex-row border border-gray-300 justify-between px-6 md:px-12 lg:px-20 gap-5">
        <div className="md:w-1/2 md:border-r py-12 md:py-16 border-gray-300 h-full">
          <p className="max-w-md text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            From shop floors to smart factories, we deliver customizable cobots,
            UGVs, vision systems, and end-of-arm tooling. Driven by Indigenous
            innovation, our technology meets global standards and empowers
            industries to scale beyond limits.
          </p>
          <button className="bg-[#FF6600] flex gap-2 text-white px-4 sm:px-5 py-2 sm:py-3 mt-6 shadow-md hover:bg-[#e05500] transition-colors duration-300 text-sm sm:text-base">
            Discover Products <ArrowRight />
          </button>
        </div>

        <div className="md:w-2/3 flex items-center md:text-left py-12 md:py-16">
          <h1 className="max-w-2xl ml-10 text-[#FF6600] font-normal text-3xl sm:text-4xl md:text-6xl leading-snug md:leading-tight">
            Made in India <br /> Engineered for the World
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-6 sm:px-6 md:px-10 bg-[#E5E5E5] py-10 ">
        {/* <div className="flex justify-center md:justify-between gap-3 sm:gap-6 py-4 flex-wrap">
          <div className="flex gap-2">
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Robotics
            </p>
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Customization
            </p>
          </div>
          <div className="flex gap-2">
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Indigenous
            </p>
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Innovation
            </p>
          </div>
          <div className="flex gap-2">
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Automation
            </p>
            <p className="px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
              Quality
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src={a2}
              alt="Indigenous Innovation"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 flex bg-white/90 p-4 sm:p-6 max-w-full md:max-w-2xl gap-10">
              <div className=" sm:block w-1/3">
                <Image
                  src={a2}
                  alt="indigenous innovation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col w-1/2 items-start">
                <h1 className="text-lg sm:text-2xl md:text-4xl  mb-2">
                  Indigenous Innovation
                </h1>
                <p className="text-gray-600 text-xs ">
                  Committed to the "Made in India, Engineered for the World"
                  philosophy, we focus on indigenous innovation to meet global
                  standards.
                </p>
              </div>
            </div> */}
          </div>

          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src={a1}
              alt="Engineers working"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white">
              <p className="text-xs sm:text-sm md:text-base max-w-xs mt-2 sm:mt-4">
                From collaborative robots and UGVs to vision systems and custom
                end-of-arm tooling, we tailor our solutions to your specific
                needs.
              </p>
              <div className="flex items-end justify-between">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal mb-2 sm:mb-4 leading-snug">
                  One Platform,
                  <br /> Infinite Solutions
                </h1>
                <button className="shrink-0">
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-10 sm:w-12 md:w-16 h-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
