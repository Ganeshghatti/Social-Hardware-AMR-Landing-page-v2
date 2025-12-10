import Image from "next/image";
import robot from "../../../public/future_section_bg.png";
import ContactInput from "../ui/input";

export default function Future() {
  return (
    <section className="min-h-screen relative w-full font-geist bg-black text-white flex flex-col md:flex-row">
      <div className="relative w-2/3 overflow-hidden flex">
        <Image
          src={robot}
          alt="Advanced collaborative robot system by Social Hardware"
          fill
          className="object-cover scale-110 blur-xs scale-x-[-1.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent" />

        <div className="md:absolute z-10 text-white top-10 md:top-20  md:left-16 max-w-full p-4 md:p-0">
          <p className="uppercase text-sm mt-5 md:mt-0 md:text-sm mb-3 md:mb-4">
            Advanced Robotics & Automation
          </p>
          <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 max-w-2xl leading-tight">
            Engineer Your Advantage
          </h2>

          <div className="mt-4 md:mt-6">
            <p className="max-w-xs md:max-w-sm text-md md:text-base">
              Sign up for instant access to our Company Profile and curated news
              that helps you automate smarter.
            </p>
            {/* 
            <div className=" mt-12 md:mt-10 flex flex-row max-w-xs md:max-w-2xl">
              <input
                type="text"
                placeholder="Enter your Email address"
                required
                className="bg-black py-4 px-4 md:px-10 text-white text-sm md:text-base flex-1 border-1 border-gray-200 md:border-0"
              />
              <button className="text-black bg-white py-2 px-6 md:px-10 text-sm md:text-base font-semibold">
                Send
              </button>
            </div> */}
            <ContactInput />
          </div>
        </div>
      </div>

      <div className=" md:flex bg-black absolute right-0 w-full md:w-1/3 h-full text-white flex-col px-12">
        <p className="relative hidden md:flex top-20 max-w-sm mx-auto text-right">
          Gain a competitive edge with indigenous robotic systems. We provide
          custom-built cobots, UGVs, and end-of-arm tooling.
        </p>
      </div>

      <div className="absolute right-1 md:right-20 bottom-36 md:bottom-55 2xl:bottom-70 flex flex-col  justify-center leading-[0.8]">
        <h1 className="text-[103px] sm:text-[160px] md:text-[255px] 2xl:text-[280px] font-bold text-[#FFFFFF] tracking-tight">
          BUILD
        </h1>
      </div>

      <div className="absolute mx-2 md:mx-0 right-1 left-0  md:left-85 2xl:left-90 bottom-0 flex flex-col justify-center mb-10 leading-[0.8]">
        <h1 className="text-[90px] sm:text-[160px] md:text-[230px] 2xl:text-[280px] font-bold text-[#AFAFAF] tracking-20">
          FUTURE
        </h1>
      </div>
    </section>
  );
}
