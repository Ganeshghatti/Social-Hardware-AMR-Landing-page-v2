import React from "react";
import Image from "next/image";
import robot1 from "../../../../public/robot_about.png";
import robot2 from "../../../../public/about_2.png";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-white py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="md:px-20 px-6 ">
          <p className="text-[#000000] text-sm mb-3">
            Our Philosophy. Engineered for the World.
          </p>
          <h1 className="text-4xl md:text-5xl max-w-md leading-tight mb-6">
            Automate Without Complexity, Imagine Robotics Without Boundaries.
          </h1>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
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

        <div className="relative flex justify-center">
          <div
            className="relative w-1/2 h-11/12 right-20  overflow-hidden shadow-xl"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 90px 100%, 0 calc(100% - 90px))",
            }}
          >
            <Image
              src={robot1}
              alt="Customizable Cobots"
              fill
              className="object-cover shadow-inner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-4 right-4 text-white">
              <p className="text-sm">01</p>
              <h3 className="text-xl font-medium">Customizable Cobots</h3>
            </div>
            <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow">
              Customization
            </span>
          </div>

          <div
            className="absolute right-[-30px]  w-1/3 h-11/12 bottom-0  overflow-hidden  rounded-bl-[40px] shadow-xl hidden md:block"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0 calc(100% - 60px))",
            }}
          >
            <Image
              src={robot2}
              alt="Automation"
              fill
              className="object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow">
              Automation
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  sm:items-center sm:mt-5 md:mt-10">
        <div className="flex w-2/3 justify-between mx-20">
          <div className="flex items-center gap-3 ">
            <p className="text-2xl font-semibold">4.9</p>
            <div className="flex flex-col">
              <span className="text-black">★★★★★</span>
              <p className="text-sm text-gray-500">Customer Review</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-800 font-medium">One Platform. Infinite</p>
            <p className="font-medium">Industrial Applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
