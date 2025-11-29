import { products } from "@/default-data/products";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

export default function TechnicalOverview({ id }) {
  const product = products.find((p) => p.id == id);
  return (
    <div className=" w-full ">
      <div className="flex flex-col py-16 ">
        <div
          className="w-64 mx-auto flex items-center justify-center 
             border-2 border-[#E5E5E5] bg-white rounded-2xl px-2 py-1 shadow-sm
             transition-all duration-300 ease-out
             hover:shadow-md hover:scale-100 hover:border-gray-300 hover:bg-gray-50"
        >
          <h2 className="text-[#232323] font-semibold">
            Technical Specifications
          </h2>
        </div>

        <div className="mt-6 md:mt-14 justify-center flex items-center mx-auto">
          <h1 className="2xl:text-6xl md:text-5xl text-4xl  max-w-4xl text-center">
            {product.title} Cobot <br />
            Performance Overview
          </h1>
        </div>
      </div>

      <div className="w-full max-w-4xl md:mx-auto px-6 md:py-8 md:px-10 md:mb-10">
        <div className="w-full  overflow-hidden bg-white  border-gray-200 border-2">
          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            <p className="text-black font-semibold">Reach Model No.</p>
            <p className="text-gray-900 font-medium mx-2">{product.title}</p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b  border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300 "
          >
            {" "}
            <p className="text-black font-semibold mr-6 md:mr-0">
              Degrees of Freedom
            </p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Degrees_of_freedom}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">Payload (Kg)</p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Payload_kg}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">Reach (mm)</p>
            <p className="text-gray-900 font-medium mx-2">{product.Reach_mm}</p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold ">Repeatability (mm)</p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Repeatability_mm}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b  border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">Weight (Kg)</p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Weight_kg}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">IP Classification</p>
            <p className="text-gray-900 font-medium mx-2">
              {product.IP_Classification}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b  border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">Installation Orientation</p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Installation_Orientation}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold mr-10 md:mr-0">
              Encoder Resolution
            </p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Encoder_Resolution}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b  border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold mr-10 md:mr-0">
              Communication Bus
            </p>
            <p className="text-gray-900 font-medium mx-2">
              {product.Communication_Bus}
            </p>
          </div>

          <div
            className="
      grid grid-cols-2 border-b bg-gray-100 border-gray-300 p-4
      relative after:content-[''] after:absolute after:top-0 after:bottom-0 
      after:left-1/2 after:w-[1.4px] after:bg-gray-300"
          >
            {" "}
            <p className="text-black font-semibold">Brake Type</p>
            <p className="text-gray-900 font-medium mx-2">{product.Brake}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 md:py-10 mt-8 md:mt-2 bg-[#F9F9F9] border-t-[#E5E5E5] border-1">
        <div className="flex flex-wrap justify-center gap-4">
          {product.otherimages.map((image, idx) => (
            <Dialog key={idx}>
              {/* Trigger */}
              <DialogTrigger>
                <Image
                  src={image.image}
                  alt="img"
                  width={180}
                  height={180}
                  className="w-[140px] sm:w-[160px] md:w-[180px] h-auto object-contain cursor-pointer hover:scale-[1.03] transition"
                />
              </DialogTrigger>

              <DialogOverlay
                className="
            fixed inset-0 
            bg-black/70 
            backdrop-blur-sm 
            animate-in fade-in-50
          "
              />

              <DialogContent
                className="
            max-w-[90vw]
            md:max-w-[50vw]
            lg:max-w-[40vw]
            bg-white
            rounded-lg
            shadow-xl
            animate-in zoom-in-50
          "
              >
                <DialogHeader>
                  <DialogTitle className="text-left w-full font-normal text-md">
                    {image.name}
                  </DialogTitle>

                  <DialogDescription className="flex flex-col items-center justify-center">
                    <Image
                      src={image.image}
                      alt="img"
                      width={180}
                      height={180}
                      className="w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain"
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="relative w-full h-screen">
          <Image
            src="/f53e0ad7b543cdecf768ca6156f604d73a1a1811.png"
            alt="bg"
            width={1000}
            height={800}
            className=" w-full h-[120vh] object-fill hidden md:block"
          />

          <Image
            src="/bg_image.jpeg"
            alt="bg"
            width={1000}
            height={800}
            className=" w-full h-[120vh] object-fill block md:hidden"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* 
          <div className="absolute -right-40 bottom-10 md:bottom-20">
            <Image
              src="/3483ca5d500f39deaa906ec4ad26ebd25967ba7d.png"
              alt="bg"
              width={600}
              height={700}
              className="scale-x-[-1] opacity-30"
            />
          </div> */}

          <div className="absolute top-10 md:top-24 left-3 md:left-1/2 md:-translate-x-1/2 text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-normal">
              Ready to dive deeper?
            </h1>

            <div className="mt-10 md:mt-14">
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl ">
                Download the official
              </h2>
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl   mt-3">
                {product.title} cobot datasheet.
              </h2>
            </div>
          </div>

          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/3 md:mt-5
                    bg-[#D9D9D91A] backdrop-blur-md rounded-3xl
                    w-[90%] md:w-2/5 h-auto pb-14 pt-14  flex justify-center"
          >
            <form className="flex flex-col items-center w-full px-4">
              <input
                placeholder="enter your name"
                type="text"
                className="px-8 py-4 w-full md:w-3/4 bg-[#282828] text-white rounded-2xl"
              />

              <input
                placeholder="enter your email"
                type="email"
                className="px-8 py-4 w-full md:w-3/4 mt-4 bg-[#282828] text-white rounded-2xl"
              />

              <button className="flex w-full md:w-3/4  mt-4">
                <p className="bg-white py-4 px-6 text-md md:text-lg rounded-l-2xl font-medium text-black flex-1 text-center">
                  Download Technical Datasheet
                </p>
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={54}
                  height={50}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
