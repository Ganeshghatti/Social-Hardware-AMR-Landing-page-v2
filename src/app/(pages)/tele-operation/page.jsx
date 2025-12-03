import ContactInput from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeleOperation() {
  return (
    <div className="  font-geist">
      <div
        className="w-full py-10 px-4 sm:px-8 md:px-8 2xl:px-12 flex flex-col mt-4 md:mt-0 md:flex-row bg-[#FFFFFF] gap-5"
        id="teleoperation"
      >
        <div className="w-full flex flex-col md:mt-5 px-4 sm:px-6 md:px-5 py-6 md:py-10">
          <h1 className="hidden md:flex text-3xl sm:text-4xl md:text-6xl 2xl:text-6xl text-[#232323] font-normal leading-tight md:leading-[4.5rem] mb-6">
            Tele-op data capture.
            <br />
            Turn human intervention <br />
            into smarter autonomy.
          </h1>

          <p className="text-[#6D6D6D] text-md sm:text-md md:text-lg max-w-5xl leading-6 sm:leading-7 md:leading-9 mb-8">
            Our tele-op platform turns every moment of human intervention into
            high‑value training data, letting you capture rich demonstrations,
            edge cases, and real‑world corrections across your existing robot
            fleet. With seamless integration into common industrial and research
            platforms, GPU‑optimized real-time control, and an immersive
            operator experience, you can safely operate, supervise, and improve
            embodied AI systems—from single robots to global deployments—without
            re‑architecting your stack.
          </p>

          {/* Icons */}
          <div className="grid grid-cols-3 md:flex w-full mt-5 md:mt-8 gap-3 md:gap-8">
            <div className="flex flex-col items-center text-center justify-center gap-2 sm:gap-3">
              <Image
                src="/e34164118a20d9c4283429da7392c5774a406392.png"
                alt="img"
                width={60}
                height={60}
                className="w-12 sm:w-14 h-12 sm:h-14 md:w-16 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 sm:px-4 py-1 text-[10px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Plug-and-play
              </p>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2 sm:gap-3">
              <Image
                src="/cff04ca3e6ac4dd78cd4c51bbe26bc9eb175c748.png"
                alt="img"
                width={60}
                height={60}
                className="w-12 sm:w-14 h-12 sm:h-14 md:w-16 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 sm:px-4 py-1 text-[10px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                GPU-optimized
              </p>
            </div>

            <div className="flex flex-col items-center text-center justify-center gap-2 sm:gap-3">
              <Image
                src="/8973de563bb3adcbf57c9db83e2d16f88e8b10ab.png"
                alt="img"
                width={60}
                height={60}
                className="w-12 sm:w-14 h-12 sm:h-14 md:w-18 md:h-12"
              />
              <p className="bg-[#ECECEC] px-3 sm:px-4 py-1 text-[10px] sm:text-xs md:text-sm rounded-xl whitespace-nowrap">
                Extended Reality
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Big Image */}
        <div className="w-full md:w-full relative h-[300px] sm:h-[400px] md:h-[700px] overflow-hidden ">
          <Image
            src="/18bc30f82ed4172605c95d1b6a260f0685074096.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full mt-10">
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[450px] md:h-[700px]  overflow-hidden">
          <Image
            src="/tele-opeation-image1.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2  items-start md:items-center justify-center  space-y-6 bg-white flex flex-col mt-5 md:mt-10 md:px-20 px-6">
          <div className="">
            <h2 className="text-lg sm:text-2xl font-bold">
              Seamless Integration
            </h2>
            <p className="mt-1 text-base sm:text-lg text-[#6D6D6D]">
              Plug-and-play with your existing hardware and software stack,
              supporting common industrial and research robot platforms.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold">
              GPU-Optimized Performance
            </h2>
            <p className="mt-1 text-base sm:text-lg text-[#6D6D6D]">
              Low-latency, real-time control on any commercial GPU, on-prem, in
              the cloud, or at the edge.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold">
              Immersive Operator Experience
            </h2>
            <p className="mt-1 text-base sm:text-lg text-[#6D6D6D]">
              XR tele-presence, haptics, and multi-sensor views so operators
              don’t just see what the robot sees—they feel what it does.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold">
              Flexible Data Operation
            </h2>
            <p className="mt-1 text-base sm:text-lg text-[#6D6D6D]">
              Low-data and high-data modes with adaptive streaming to keep
              control stable, even on imperfect networks.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold">Built for Scale</h2>
            <p className="mt-1 text-base sm:text-lg text-[#6D6D6D]">
              From a single robot to full fleets, with role-based access and
              centralized monitoring so you can scale without re-architecting.
            </p>
          </div>
        </div>
      </div>

      <section className="min-h-screen relative w-full font-geis text-white flex flex-col md:flex-row mt-5">
        <div className="relative w-full h-[700px] md:h-[900px] overflow-hidden flex">
          <Image
            src="/tele-operation-bg.png"
            alt="bg"
            fill
            className="object-center "
            priority
          />

          <div className="absolute flex max-w-xl top-40 left-1/3 items-center justify-center">
            <p className="text-2xl font-geist leading-10 text-center">
              Contact us to schedule a demo, explore pricing, or discuss a
              tailored integration—and see how tele-op data capture can
              accelerate your path to smarter autonomy.
            </p>
          </div>

          <div
            className="absolute -bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 md:mt-5
                           bg-[#D9D9D91A] backdrop-blur-md rounded-3xl
                           w-[90%] md:w-2/5 h-auto pb-14 pt-14  flex justify-center"
          >
            <form className="flex flex-col items-center w-full px-4">
              <input
                placeholder="enter your name"
                type="text"
                className="px-8 py-4 w-full md:w-3/4 bg-[#282828] text-white rounded-2xl"
              />

              <input
                placeholder="enter your email"
                type="email"
                className="px-8 py-4 w-full md:w-3/4 mt-4 bg-[#282828] text-white rounded-2xl"
              />

              <button className="flex w-full md:w-3/4  mt-4">
                <p className="bg-white py-4 md:px-6 text-sm md:text-lg rounded-l-2xl font-medium text-black flex-1 text-center">
                  Download Technical Datasheet
                </p>
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={54}
                  height={50}
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
