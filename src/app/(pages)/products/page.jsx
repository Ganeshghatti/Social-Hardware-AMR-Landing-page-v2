import React from "react";
import product1 from "../../../../public/product1.png";
import product3 from "../../../../public/product3.png";
import Productcard from "@/components/Productcard";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "1",
      title: "Indigenous Innovation",
      image: product1,
      description:
        "Committed to the Made in India, Engineered for the World philosophy, we focus on indigenous innovation to meet global standards.",
    },
    {
      id: "2",
      title: "Indigenous Innovation",
      image: product3,
      description:
        "Committed to the Made in India, Engineered for the World philosophy, we focus on indigenous innovation to meet global standards.",
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="py-16 px-6 sm:px-10 flex flex-col gap-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">
          Our Products
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto sm:mx-0">
          Contact us as soon as possible to reach your hands towards the most
          advanced form of productivity.
        </p>
      </div>

      <div className="bg-[#F0F0F0] w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 p-6 sm:p-10">
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row  justify-center lg:justify-start gap-6">
          {products.map((p) => (
            <Productcard
              key={p.id}
              title={p.title}
              image={p.image}
              description={p.description}
            />
          ))}
        </div>
        <div className="flex items-center justify-center px-15 py-3 ">
          <ArrowRight size={28} className="text-white w-20 bg-black h-10 px-6 rounded-2xl" />

        </div>

      </div>
    </section>
  );
}
