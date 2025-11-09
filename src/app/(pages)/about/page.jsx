import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:px-20 px-6">
          <p className="text-[#000000] text-sm mb-3">
            Our Philosophy. Engineered for the World.
          </p>
          <h1 className="text-4xl md:text-5xl max-w-xl leading-tight mb-6">
            Simple, cost-effective <br />
            automation solutions. <br />
            Indigenous robotics without boundaries.
          </h1>
          <p className="text-gray-700 text-sm mb-6 max-w-lg">
            We believe industrial automation should be accessible and adaptable.
            That’s why we build indigenous systems that lead the way—no steep
            import dependencies, no support delays, just pure performance.
            Whether you’re assembling, manufacturing, or performing quality
            control, our process feels natural, fast, and reliable.
          </p>
          <button className="bg-[#FF6600] hover:bg-[#e05500] transition-colors duration-300 text-white px-6 py-3 flex items-center gap-2 shadow-md">
            Explore Our Robotics <ArrowRight />
          </button>
        </div>

        <div className="flex flex-col relative">
          <div className="flex m-0 p-0">
            <div className="relative w-72 aspect-[1/1] clip-hex overflow-hidden group">
              <Image
                src="/heroimage2.png"
                alt="Customizable Cobots"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white opacity-100">
                <p className="text-sm">01</p>
                <h3 className="text-lg font-semibold">Customizable Cobots</h3>
              </div>
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

            <div className=" w-72 aspect-[1/1] clip-hex overflow-hidden group absolute right-48 top-57">
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

      <div className="flex justify-center mt-20 bg-white max-w-4xl mx-auto">
        <Image src="/6503a3aba62ed8caa2aa0cc8ff43bc5dd4f2bcd9.png" alt="" width={800} height={400}/>
      </div>
    </section>
  );
}
