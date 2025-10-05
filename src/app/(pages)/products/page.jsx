import React from "react";
import product1 from "../../../../public/product1.png";
import product4 from "../../../../public/advanced-ugv.webp";
import product5 from "../../../../public/bionic-hand.webp";
import product2 from "../../../../public/vision-system.webp";
import product3 from "../../../../public/reach-v1.webp";
import product6 from "../../../../public/lite-ugv.webp";
import product7 from "../../../../public/precision-gripper.webp";

import Productcard from "@/components/Productcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      image: product2,
      description:
        "Delivering world-class engineering solutions tailored for both Indian and global industries.",
    },
    {
      id: "3",
      title: "Indigenous Innovation",
      image: product3,
      description:
        "Committed to the Made in India, Engineered for the World philosophy, we focus on indigenous innovation to meet global standards.",
    },
    {
      id: "4",
      title: "Indigenous Innovation",
      image: product4,
      description:
        "Designing products that are efficient, sustainable, and built for a greener tomorrow.",
    },
    {
      id: "5",
      title: "Indigenous Innovation",
      image: product5,
      description:
        "Designing products that are efficient, sustainable, and built for a greener tomorrow.",
    },
    {
      id: "6",
      title: "Indigenous Innovation",
      image: product7,
      description:
        "Designing products that are efficient, sustainable, and built for a greener tomorrow.",
    },
    {
      id: "7",
      title: "Indigenous Innovation",
      image: product6,
      description:
        "Designing products that are efficient, sustainable, and built for a greener tomorrow.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="py-16 px-6 sm:px-10 flex flex-col gap-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">
          Our Products
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto sm:mx-0">
          Contact us as soon as possible to reach your hands towards the most
          advanced form of productivity.
        </p>
      </div>

      <div className="bg-[#F0F0F0] w-full flex flex-col lg:flex-row items-center justify-center p-5  sm:p-10">
        <div className="w-full lg:w-11/12 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((p) => (
                <CarouselItem
                  key={p.id}
                  className="basis-1/1 sm:basis-1/2 lg:basis-1/4"
                >
                  <Productcard
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    image={p.image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 sm:left-0 lg:-left-8 xl:-left-10 top-1/2 -translate-y-1/2 z-20 bg-black text-white hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200" />
            <CarouselNext className="absolute right-2 sm:right-0 lg:-right-8 xl:-right-10 top-1/2 -translate-y-1/2 z-20  bg-black text-white  hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
