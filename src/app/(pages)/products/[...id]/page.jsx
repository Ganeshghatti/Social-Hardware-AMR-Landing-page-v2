import TechnicalOverview from "@/components/product/Technical";
import { products } from "@/default-data/products";
import Image from "next/image";

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
        <div className="w-full md:w-2/3  space-y-6 md:space-y-8 py-20 pl-5 md:pl-20">
          <div className="bg-white border border-gray-300 rounded-full px-6 py-2 shadow-lg w-fit">
            <p className="text-[#252525] text-sm md:text-base font-medium">
              {product.title} Collaborative Robot
            </p>
          </div>

          <h1 className="text-[#101010] text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-lg md:mt-8 ">
            For precision tasks and demanding industrial environments.
          </h1>

          <p className="text-[#757575] leading-relaxed max-w-lg md:mt-14 font-geist">
            The P3-R600-S100 is the ideal solution for small‑part assembly,
            light material handling, machine tending, dispensing, inspection,
            and lab automation. With a 3 kg payload and compact 600 mm reach, it
            is ideal for bench-top cells, tight workstations, and collaborative
            tasks alongside operators.
          </p>
        </div>

        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[500px] mt-12 md:mt-0">
          <Image
            src="/7de2fad25af3759bc8d4199093e2be092621f32d.png"
            alt="background pattern"
            width={940}
            height={900}
            className="
      absolute 
      -top-10
      right-0
      w-[400px]
      sm:w-[700px]
      md:w-[740px]
      opacity-90
      -translate-x-2
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
      translate-x-0
      md:top-30
      xl:top-26
      xl:-right-15
      md:-right-0
      md:-translate-x-1/2
      xl:-translate-x-2/3
      z-10
      w-[400px]
      sm:w-[300px]
      md:w-[380px]
      lg:w-[450px]
      xl:w-[570px]
    "
          />
        </div>
      </div>

      <div className="border-1 bg-[#F9F9F9] py-10 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/tabler-icon-weight.svg.png"
              width={40}
              height={40}
              alt=""
            />
            <h3 className="text-[#141414] font-semibold mt-2">
              {product.Payload_kg}
            </h3>
            <p className="text-sm">Payload</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icon-reach.svg.png" width={40} height={40} alt="" />
            <h3 className="text-[#141414] font-semibold mt-2">
              {product.Reach_mm}
            </h3>
            <p className="text-sm">Reach</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/icon-payload-1.svg.png"
              width={40}
              height={40}
              alt=""
            />
            <h3 className="text-[#141414] font-semibold mt-2">
              {product.Weight_kg}
            </h3>
            <p className="text-sm">Weight</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/tabler-icon-weight.svg fill.png"
              width={40}
              height={40}
              alt=""
            />
            <h3 className="text-[#141414] font-semibold mt-2">
              {product.Repeatability_mm}
            </h3>
            <p className="text-sm">Repeatability</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/tabler-icon-weight.svg fill (1).png"
              width={40}
              height={40}
              alt=""
            />
            <h3 className="text-[#141414] font-semibold mt-2">
              {product.Degrees_of_freedom}
            </h3>
            <p className="text-sm ">Degrees-of-freedom</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <TechnicalOverview id={id} />
      </div>
    </div>
  );
}
