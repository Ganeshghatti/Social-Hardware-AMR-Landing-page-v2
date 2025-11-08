import Image from "next/image";
import robot from "../../public/robot3.png";
import hand from "../../public/robot_hand.png";

export default function HeroSection() {
  return (
    <section className=" min-h-screen relative w-full hidden md:flex">
      <div className="relative w-full overflow-hidden flex ">
        <div>
          <Image
            src={robot}
            alt="Robot"
            fill
            className="object-cover scale-150 blur-xs"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

          <div className="absolute z-2  text-white top-2 left-16 max-w-full ">
            <p className="uppercase text-sm mb-4 mt-20">
              Advanced Robotics & Automation
            </p>
            <h2 className="md:text-3xl text-2xl font-nromal  mb-6 max-w-xl">
              Engineer Your <br /> Advantage
            </h2>
          </div>

          {/* <div className="absolute z-2 top-20 right-1/3 items-start">
            <Image src={hand} alt="r" className="w-40 "/>
            <p className="text-white max-w-xs   mb-4">
              Gain a competitive edge with indigenous robotic systems. We
              provide custom-built Cobots, UGVs, and end-of-arm tooling.
            </p>
          </div> */}
        </div>
        <div className="bg-black absolute right-0 w-1/4 h-full text-white flex flex-col px-12">
          <button className="bg-white font-medium text-black px-5 py-2 rounded-sm flex items-center gap-2 w-fit">
            Get a Custom Quote →
          </button>
        </div>
      </div>
      <div className="absolute right-20 bottom-70 flex flex-col justify-center  leading-[0.8]">
        <h1 className="text-[280px] font-extrabold text-white/95  tracking-tight">
          BUILD
        </h1>
      </div>
      <div className="absolute left-20 bottom-0 flex flex-col justify-center mb-10  leading-[0.8]">
        <h1 className="text-[280px] font-extrabold text-white/40  tracking-tight ">
          FUTURE
        </h1>
      </div>
    </section>
  );
}
