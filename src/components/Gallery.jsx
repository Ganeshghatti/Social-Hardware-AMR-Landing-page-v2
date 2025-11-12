import React from "react";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 px-10 py-6 w-full bg-[#F5F5F5]" id="gallery">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={image1}
          alt="image1"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={image2}
          alt="image2"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={image3}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
