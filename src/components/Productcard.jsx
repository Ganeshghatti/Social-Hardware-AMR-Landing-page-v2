import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Productcard({ title, description, image, id }) {
  return (
    <div key={id} className="max-w-full">
      <div className="bg-white flex flex-col rounded-xl py-12 shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <div className="relative w-full h-40 md:h-72">
          <Image src={image} alt={title} fill className="" />
        </div>

        <div className="p-6 flex flex-col gap-2">
          <h1 className="text-4xl font-normal text-[#000000] ">{title}</h1>
          <p className="text-sm max-w-md text-gray-600 leading-relaxed">{description}</p>
        </div>
         <button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-1 text-white font-medium px-5 py-2 mx-5 rounded-md w-fit mb-4 text-sm sm:text-base">
          Get a Custom Quote <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
