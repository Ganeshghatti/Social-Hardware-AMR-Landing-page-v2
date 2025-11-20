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
    <div>
      <div className="w-full overflow-hidden bg-[#F9F9F9]">
        <div className="flex flex-col md:flex-row w-full bg-[#F9F9F9]">
          <div className="w-full md:w-1/2 space-y-4 py-10 px-6 md:py-16 md:px-16">
            <div className="bg-[#FFFFFF] items-center flex justify-center border border-[#E5E5E5] rounded-2xl px-4 py-2 shadow-lg max-w-[90%] md:max-w-sm font-medium">
              <p className="text-md">
                Unleash Productivity with the {product.title}
              </p>
            </div>

            <h2 className="text-[#101010] md:text-6xl text-3xl max-w-6xl mt-6 md:mt-13 leading-tight">
              For precision tasks and demanding industrial environments.
            </h2>

            <p className="text-[#757575] max-w-lg mt-6 md:mt-14">
              The P3-R600-S100 is the ideal solution for small-part assembly,
              light material handling, machine tending, dispensing, inspection,
              and lab automation. With a 3 kg payload and compact 540 mm reach,
              it is ideal for bench-top cells, tight workstations, and
              collaborative tasks alongside operators.
            </p>
          </div>

          <div className="w-full md:w-2/3 relative flex justify-center md:block px-4 pb-10 md:pb-0">
            <div className="relative overflow-visible flex justify-center">
              <Image
                src="/8d22fdbea58e38ce6f319e3c7115f2bfab87be08.png"
                alt="image"
                width={600}
                height={400}
                className="w-full  max-w-[450px] md:max-w-none opacity-20 scale-125 md:translate-x-1/4 md:translate-y-5 object-contain"
              />
            </div>

            <div className="absolute -top-10 md:top-10 right-1/2 md:right-[16%] translate-x-1/2 md:translate-x-0">
              <Image
                src="/1e1e6d20c1a1861a20c116e5d6f5efffd5862f89.png"
                alt="image"
                width={350}
                height={500}
                className="md:w-[550px] md:h-[650px] w-[260px] h-[330px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#F9F9F9] py-14 md:py-10 px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10 w-full md:w-3/5 mx-auto text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/tabler-icon-weight.svg.png"
                alt="icon"
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <h3 className="text-[#141414] font-semibold mt-2 text-lg sm:text-xl">
                {product.Payload_kg}
              </h3>
              <p className="mt-2 text-sm sm:text-base">Payload</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/icon-reach.svg.png"
                alt="icon"
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <h3 className="text-[#141414] font-semibold mt-2 text-lg sm:text-xl">
                {product.Reach_mm}
              </h3>
              <p className="mt-2 text-sm sm:text-base">Reach</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/icon-payload-1.svg.png"
                alt="icon"
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <h3 className="text-[#141414] font-semibold text-lg sm:text-xl mt-2">
                {product.Weight_kg}
              </h3>
              <p className="mt-2 text-sm sm:text-base">Weight</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/tabler-icon-weight.svg fill.png"
                alt="icon"
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <h3 className="text-[#141414] font-semibold text-lg sm:text-xl mt-2">
                {product.Repeatability_mm}
              </h3>
              <p className="mt-2 text-sm sm:text-base">Repeatability</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/tabler-icon-weight.svg fill (1).png"
                alt="icon"
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <h3 className="text-[#141414] font-semibold text-lg sm:text-xl mt-2">
                {product.Degrees_of_freedom}
              </h3>
              <p className="mt-2 text-sm sm:text-base">Degrees-of-freedom</p>
            </div>
          </div>
        </div>
      </div>

      <TechnicalOverview id={id} />
    </div>
  );
}
