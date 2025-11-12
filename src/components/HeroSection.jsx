import Image from "next/image";
import a1 from "../../public/heroimage2.png";
import a2 from "../../public/heroimage1.png";
import arrow from "../../public/arrow.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#E5E5E5]">
      <div className="mx-auto  flex flex-col-reverse md:flex-row border border-gray-300 justify-between px-6 sm:px-10 md:px-12 lg:px-20 gap-6 ">
       <div className="md:w-2/5 md:border-r  border-gray-300 py-0 md:py-16 flex flex-col justify-center items-center md:items-start">
          <p className="text-[#8D8D8D] leading-relaxed text-xs sm:text-base md:text-md max-w-2xl items-center ">
            We’re a Bengaluru-based robotics company with over eight years of
            experience partnering with local and global brands. From smart
            factories to research labs, we design and deliver customizable
            cobots, UGVs, vision systems, and end-of-arm tooling that enhance
            productivity and precision.
          </p>

          <button className="bg-[#FF6600] flex items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 mt-6 mb-4  shadow-md hover:bg-[#e05500] transition-colors duration-300 text-sm sm:text-base w-fit">
            Discover Products <ArrowRight size={18} />
          </button>
        </div>

        <div className="md:w-1/2 flex items-center justify-center md:justify-start text-center md:text-left py-2 mt-5 md:py-16">
          <h1 className="text-[#FF6600] font-normal md:ml-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight max-w-2xl">
            Made in India <br /> Engineered for the World
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-4 sm:px-6 md:px-10 bg-[#E5E5E5] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[540px] overflow-hidden ">
            <Image
              src={a2}
              alt="Indigenous Innovation"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>

          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[550px] overflow-hidden ">
            <Image
              src={a1}
              alt="Engineers working"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 text-white">
              <p className="text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md mt-2 sm:mt-4 leading-relaxed">
                From collaborative robots and UGVs to vision systems and custom
                end-of-arm tooling, we tailor our solutions to your specific
                needs.
              </p>

              <div className="flex items-end justify-between mt-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-3 sm:mb-4 leading-snug">
                  One Platform,
                  <br /> Infinite Solutions
                </h1>
                <button className="shrink-0 hover:scale-105 transition-transform">
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-8 sm:w-10 md:w-12 lg:w-16 h-auto"
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
