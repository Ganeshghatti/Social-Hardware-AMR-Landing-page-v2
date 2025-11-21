import React from "react";

import Productcard from "@/components/Productcard";
import { products } from "@/default-data/products";
import Image from "next/image";

export default function Products() {
  return (
    <section className="w-full bg-white font-geist">
      <div className="py-12 px-6 sm:px-10 flex flex-col md:flex-row md:justify-between gap-3 text-center sm:text-left">
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-2">
            Collaborative Robots{" "}
          </h1>
          <p className="text-[#6D6D6D] text-sm sm:text-base max-w-xl ml-0 md::ml-20">
            Cost-effective, ready-made cobot solutions with payloads from 3kg to
            20kg.Safe, fast to deploy, and flexible from small-part assembly to
            palletizing.
          </p>
        </div>

        <div className="flex md:gap-6 gap-3 sm:mt-0 ">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/icon-payload-1.svg.png"
              alt="img"
              width={30}
              height={30}
            />
            <p className="bg-gray-200 px-3 py-1 rounded-2xl text-xs md:text-sm sm:text-sm">
              3–20 Kg Payload Capacity
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src="/icon-reach.svg.png" alt="img" width={30} height={30} />
            <p className="bg-gray-200 px-3 py-1 rounded-2xl text-xs md:text-sm sm:text-sm">
              600-1700mm Reach{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src="/image 6.png" alt="img" width={30} height={30} />
            <p className="bg-gray-200 px-3 py-1 rounded-2xl text-xs md:text-sm sm:text-sm">
              ±0.03mm to ±0.1mm Repeatability{" "}
            </p>
          </div>
        </div>
      </div>
<div className="bg-[#F0F0F0] w-full px-5 sm:px-10 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((p) => (
      <Productcard key={p.id} {...p} />
    ))}
  </div>
</div>

    </section>
  );
}
