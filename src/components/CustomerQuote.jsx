import Image from "next/image";
import robot from "../../public/robot3.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomerQuote() {
  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row bg-[#F5F5F5] font-geist">
        <div className="w-full  flex flex-col justify-center pl-4 md:py-10 md:pl-10">
          <p className="hidden md:flex text-sm text-[#000000] font-semibold mb-3">
            Indigenous Platform
          </p>

          <h1 className="hidden md:flex text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-[#232323] font-normal leading-tight mb-6">
            One Platform,
            <br /> Infinite possibilities. <br /> Craft your custom <br />
            system with us.
          </h1>

          <p className="text-[#6D6D6D] text-lg mt-5 md:mt-3 mx-1 max-w-xl mb-2">
            Define your objective and we’ll co‑create a platform that integrates
            advanced technologies engineered to your specific needs. We can
            tailor reach, payload, interfaces, safety, and software integration
            to fit your architecture and workflow, strengthening the value of
            your automation.
          </p>

          <p className="text-[#6D6D6D] text-lg max-w-xl mb-8">
            Share your requirements to request a custom quotation, and we’ll
            propose the optimal configuration, lead time, and investment for
            your project.
          </p>

          <div className="w-fit">
            <Link href="/contact" className="inline-block">
              <button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-1  text-white font-medium px-5 py-2 mb-4 text-lg">
                Request Custom Quote <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 md:flex w-full mt-5 md:mt-8 gap-2 md:gap-8 mb-5 md:mb-0">
            <div className="flex flex-col items-center gap-3 justify-center">
              <Image
                src="/Group 39860.svg"
                className="w-12 h-10 sm:w-14 sm:h-10 md:w-12 md:h-10"
                alt="img"
                width={20}
                height={20}
              />

              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Vision Systems
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/Gemini_Generated_Image_paxxiipaxxiipaxx-removebg-preview 1.svg"
                alt="img"
                width={20}
                height={20}
                className="w-12 h-10 sm:w-14 sm:h-14 md:w-12 md:h-10"
              />
              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                End-of-arm Tooling{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/monitor-mobbile.svg"
                alt="img"
                width={28}
                height={28}
                className="w-10 h-10 sm:w-12 sm:h-14 md:w-12 md:h-10"
              />
              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Teach Pendants{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[109%] 2xl:w-[107%] relative h-[500px] md:h-[880px] overflow-hidden">
          <div className="absolute inset-0 ">
            <Image
              src={robot}
              alt="Customer Quote Expo"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>

          <div className="absolute bottom-0 bg-[#000000]/50 w-full py-10 right-0">
            <p className="text-white w-full md:max-w-lg pl-6 md:pl-10">
              We can engineer custom cobots with the reach and payload your
              application demands. From compact 3 kg arms for delicate tasks to
              robust 20 kg systems for heavy-duty handling—and reaches up to
              2000 mm—we configure and optimize each robot for your exact
              requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4 md:mt-0 md:flex-row bg-[#FFFFFF] font-geist gap-5">
        <div className="w-full md:w-full relative h-[500px] md:h-[780px] overflow-hidden ">
          <Image
            src="/18bc30f82ed4172605c95d1b6a260f0685074096.jpg"
            alt="img"
            fill
            className="object-cover  "
          />
        </div>
        <div className="w-full  flex flex-col  md:mt-5 px-5 py-6 md:py-10 ">
          <h1 className="hidden md:flex text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-[#232323] font-normal leading-tight mb-6">
            Tele-op data capture.
            <br />
            Turn human intervention <br />
            into smarter autonomy.
          </h1>

          <p className="text-[#6D6D6D] text-lg max-w-3xl leading-7 md:leading-9 mb-8">
            Define your objective and we’ll co‑create a platform that integrates
            Our tele-operation platform lets experts “step inside” robots via XR
            and haptics, resolve complex situations in real time, and
            automatically capture the rich, labeled data your models need. Every
            human intervention becomes a learning signal that improves
            perception, planning, and control. Human tele-operation can handle
            the hard parts today while training your autonomous systems to
            handle them on their own tomorrow.
          </p>

          <div className="w-fit">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 flex items-center  gap-1 text-white font-medium px-5 py-2  w-fit mb-4 text-lg">
                Learn More About Tele-operation <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 md:flex w-full mt-5 md:mt-8 gap-2 md:gap-8">
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src="/e34164118a20d9c4283429da7392c5774a406392.png"
                alt="img"
                width={60}
                height={60}
                className="w-14 h-12 sm:w-14 sm:h-14 md:w-15 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Plug-and-play
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src="/cff04ca3e6ac4dd78cd4c51bbe26bc9eb175c748.png"
                alt="img"
                width={60}
                height={60}
                className="w-14 h-12 sm:w-14 sm:h-14 md:w-15 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                GPU-optimized
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 ">
              <Image
                src="/8973de563bb3adcbf57c9db83e2d16f88e8b10ab.png"
                alt="img"
                width={60}
                height={60}
                className="w-14 h-12 sm:w-14 sm:h-14 md:w-15 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 py-1 text-[11px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Extended Reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
