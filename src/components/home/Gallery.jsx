import React from "react";
import image1 from "../../../public/9804c0985d15150ca9e6e87a82762a9252970962.jpg";
import image2 from "../../../public/61bea505ad5462ef0098b481439bcdfa4c587f66.jpg";
import image3 from "../../../public/5632cb87617bc1e253fa0e41c4d4983447bde34f.png";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 px-10 py-6 w-full bg-[#F5F5F5]" id="gallery">
      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
        <Image
          src={image1}
          alt="image1"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden shadow-md">
        <Image
          src={image2}
          alt="image2"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
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
