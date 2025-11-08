import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Productcard({ title, description, image, id }) {
  return (
    <div className="flex justify-cente items-centerr">
      <div className="bg-white flex flex-col shadow-md hover:shadow-lg transition-transform duration-300 overflow-hidden w-[320px] md:w-[360px] h-[440px] hover:-translate-y-1">
        <div className="flex justify-center items-center bg-gray-100 h-56">
          <Image
            src={image}
            alt={title}
            width={240}
            height={240}
            className="object-contain"
          />
        </div>

        <div className="p-6 flex flex-col gap-3 items-center text-center">
          <h1 className="text-2xl font-medium text-[#000000]">{title}</h1>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex items-center mx-auto">
          <button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 text-white font-medium px-5 py-2 rounded-tl-xl rounded-br-xl w-fit text-sm sm:text-base transition-colors duration-200">
            Get a Custom Quote <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
