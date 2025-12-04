import TechnicalOverview from "@/components/product/Technical";
import { products } from "@/default-data/products";
import Image from "next/image";
import productbg from "@/../public/product_bg1.png"

export default async function ProductDetail({ params }) {
  const { id } = await params;

  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F9F9F9] font-geist relative overflow-hidden">
      <div className="w-full md:h-[700px] overflow-hidden flex flex-col md:flex-row items-center md:items-start ">
        <div className="w-full md:w-2/3 2xl:w-1/2  space-y-6 md:space-y-8 py-20 pl-5 md:pl-20">
          <div
            className="bg-white border-2 border-gray-200 rounded-full px-6 py-2 shadow-sm w-fit 
             transition-all duration-300 ease-out 
             hover:shadow-md hover:scale-100 hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-[#252525] text-sm md:text-base font-semibold">
              {product.title} Collaborative Robot
            </p>
          </div>

          <h1 className="text-[#101010] text-3xl sm:text-4xl lg:text-5xl leading-9 md:leading-17 max-w-lg md:mt-8 ">
            For precision tasks and demanding industrial environments.
          </h1>

          <p className="text-[#757575] leading-relaxed max-w-2xl text-md md:text-lg md:mt-14 mx-1 font-geist">
            The {product.title} is the ideal solution for small‑part assembly,
            light material handling, machine tending, dispensing, inspection,
            and lab automation. With a 3 kg payload and compact 600 mm reach, it
            is ideal for bench-top cells, tight workstations, and collaborative
            tasks alongside operators.
          </p>
        </div>

        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[500px] mt-12 md:mt-0">
          <Image
            src={productbg}
            alt="background pattern"
            width={940}
            height={800}
            className="
      absolute 
      -top-10
      right-0
      2xl:-top-20
      w-[400px]
      sm:w-[700px]
      md:w-[740px]
      2xl:w-[850px]
      opacity-93
      translate-x-14
      2xl:translate-x-0
      -translate-y-10
      pointer-events-none
    "
          />

          <Image
            src={product.image}
            alt="robot"
            width={600}
            height={600}
            className="
      absolute
      translate-x-16
      -top-5
      md:top-30
      xl:top-23
      xl:-right-18
      2xl:-translate-x-60
      2xl:top-25
      md:-right-0
      md:-translate-x-1/2
      xl:-translate-x-30
      z-10
      w-[400px]
      sm:w-[300px]
      md:w-[380px]
      lg:w-[450px]
      xl:w-[570px]
      2xl:w-[600px] scale-x-[-1]
    "
          />
        </div>
      </div>

      <div className="border-1 bg-[#F9F9F9] py-10 flex items-center justify-center ">
        <div className="grid grid-cols-3 sm:grid-3 md:grid-cols-5 gap-10 text-center items-center ">
          <div className="flex flex-col items-center">
            <Image
              src="/tabler-icon-weight.svg.png"
              width={40}
              height={40}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="text-[#141414] font-semibold mt-2 text-sm sm:text-base md:text-lg">
              {product.Payload_kg} kg
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Payload
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/icon-reach.svg.png"
              width={40}
              height={40}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="text-[#141414] font-semibold mt-2 text-sm sm:text-base md:text-lg">
              {product.Reach_mm} mm
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Reach
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/icon-payload-1.svg.png"
              width={40}
              height={40}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="text-[#141414] font-semibold mt-2 text-sm sm:text-base md:text-lg">
              {product.Weight_kg} kg
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Weight
            </p>
          </div>

          <div className="flex mx-auto ml-5 md:ml-0 md:mx-0 w-full col-span-3 md:col-span-2 gap-10 md:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src="/tabler-icon-weight.svg fill.png"
                width={40}
                height={40}
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <h3 className="text-[#141414] font-semibold mt-2 text-sm sm:text-base md:text-lg">
                {product.Repeatability_mm} mm
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Repeatability
              </p>
            </div>

            <div className="flex flex-col items-center  ">
              <Image
                src="/tabler-icon-weight.svg fill (1).png"
                width={40}
                height={40}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />

              <h3 className="text-[#141414] font-semibold mt-2 text-sm sm:text-base md:text-lg">
                {product.Degrees_of_freedom}-DoF
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Degrees-of-freedom
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <TechnicalOverview id={id} />
      </div>
    </div>
  );
}
