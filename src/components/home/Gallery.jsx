import React from "react";
import image1 from "../../../public/gallery_img1.jpg";
import image2 from "../../../public/gallery_img2.jpg";
import image3 from "../../../public/gallery_img3.png";
import Image from "next/image";

export default function Gallery() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 px-10 py-6 w-full bg-[#F5F5F5]"
      id="gallery"
    >
      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
        <Image
          src={image1}
          alt="Social Hardware robotics lab workspace"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden shadow-md">
        <Image
          src={image2}
          alt="Collaborative robot in action"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
        <Image
          src={image3}
          alt="Robotic automation system"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
