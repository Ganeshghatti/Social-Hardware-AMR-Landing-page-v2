import { products } from "@/default-data/products";
import Image from "next/image";

export default function TechnicalOverview({id}) {

  const product = products.find((p)=> p.id == id);
  return (
    <div className=" w-full ">
      <div className="flex flex-col py-16 ">
        <div className="w-52 mx-auto items-center justify-center flex border-2 shadow-md bg-[#FFFFFF] border-[#E5E5E5] rounded-2xl px-3 py-1">
          <h2 className="font-geist text-[#232323] font-semibold">
            Technical Specifications
          </h2>
        </div>
        <div className="mt-10 justify-center flex items-center">
          <h1 className="2xl:text-6xl md:text-5xl text-4xl mx-auto max-w-4xl text-center">
            {product.title} Cobot <br/>Performance Overview
          </h1>
        </div>
      </div>

      <div className="w-full max-w-4xl md:mx-auto p-6 md:p-10 md:mt-5 ">
        <h2 className="text-xl font-bold text-gray-800  bg-gray-50 py-4 px-5 rounded-t-xl ">
          General Specifications
        </h2>

        <div className="w-full rounded-lg overflow-hidden bg-white px-2">
          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Reach Model No.</p>
            <p className="text-gray-900 font-medium">{product.title}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Degrees of Freedom</p>
            <p className="text-gray-900 font-medium">{product.Degrees_of_freedom}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Payload (Kg)</p>
            <p className="text-gray-900 font-medium">{product.Payload_kg}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Reach (mm)</p>
            <p className="text-gray-900 font-medium">{product.Reach_mm}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Repeatability (mm)</p>
            <p className="text-gray-900 font-medium">{product.Repeatability_mm}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Weight (Kg)</p>
            <p className="text-gray-900 font-medium">{product.Weight_kg}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">IP Classification</p>
            <p className="text-gray-900 font-medium">{product.IP_Classification}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Installation Orientation</p>
            <p className="text-gray-900 font-medium">
              {product.Installation_Orientation}
            </p>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100 p-4">
            <p className="text-black font-semibold">Encoder Resolution</p>
            <p className="text-gray-900 font-medium">{product.Encoder_Resolution}</p>
          </div>

          <div className="grid grid-cols-2 p-4">
            <p className="text-black font-semibold">Communication Bus</p>
            <p className="text-gray-900 font-medium">{product.Communication_Bus}</p>
          </div>

          <div className="grid grid-cols-2 p-4 border-t border-gray-100">
            <p className="text-black font-semibold">Brake Type</p>
            <p className="text-gray-900 font-medium">{product.Brake}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 px-2 sm:px-4">
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-4 lg:gap-14 w-full lg:w-3/4 mx-auto text-center">
          <div className="flex flex-col items-center ">
            <Image src="/Filter.png" alt="icon" width={30} height={25} />
            <h3 className="text-[#141414] font-semibold  md:mt-1 max-w-20  text-md md:text-xl">
              Linear Velocity
            </h3>
            <p className="mt-2 text-md md:text-lg">({product.Linear_Velocity_m_s})</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/Icon (3).png" alt="icon" width={25} height={30} />
            <h3 className="text-[#141414] font-semibold mt-2 max-w-20 text-md md:text-xl">
              Average Power
            </h3>
            <p className="mt-2 text-md md:text-lg">({product.Average_Power_W})</p>
          </div>

          <div className="flex flex-col items-center mt-4 md:mt-0 ">
            <Image src="/Icon (2).png" alt="icon" width={20} height={20} />
            <h3 className="text-[#141414] font-semibold text-md md:text-xl max-w-20 mt-2">
              Peak Power
            </h3>
            <p className="mt-2 text-md md:text-lg">({product.Peak_Power_W})</p>
          </div>

          <div className="flex flex-col items-center mt-4 md:mt-0 ">
            <Image src="/Flame.png" alt="icon" width={30} height={30} />
            <h3 className="text-[#141414] font-semibold text-md md:text-xl max-w-30 mt-2">
              Ambient Temperature
            </h3>
            <p className="mt-2 text-md md:text-lg">({product.Ambient_Temperature})</p>
          </div>

          <div className="flex flex-col items-center mt-4 md:mt-0">
            <Image src="/Son.png" alt="icon" width={30} height={30} />
            <h3 className="text-[#141414] font-semibold text-md md:text-xl mt-2">
              Ambient Humidity
            </h3>
            <p className="mt-2 text-md md:text-lg">({product.Ambient_Humidity})</p>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <Image src="/eye.png" alt="icon" width={30} height={30} />
            <h3 className="text-[#141414] font-semibold text-md md:text-xl mt-2">
              Installation Orientation
            </h3>
            <p className="mt-2 text-md md:text-lg">{product.Installation_Orientation}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/5aa566b92b2af368e5009d17a92f407fe09c932b.jpg"
            alt="bg"
            fill
            className="object-cover w-full h-full scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute -right-40 bottom-10 md:bottom-20">
            <Image
              src="/3483ca5d500f39deaa906ec4ad26ebd25967ba7d.png"
              alt="bg"
              width={600}
              height={700}
              className="scale-x-[-1] opacity-30"
            />
          </div>

          <div className="absolute top-20 md:top-32 left-1/2 -translate-x-1/2 text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-normal">
              Ready to dive deeper?
            </h1>

            <div className="mt-10 md:mt-14">
              <h2 className="text-3xl md:text-5xl font-normal">
                Download the official
              </h2>
              <h2 className="text-3xl md:text-5xl  mt-3">
                {product.title} cobot datasheet.
              </h2>
            </div>
          </div>

          <div
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/3
                    bg-[#D9D9D91A] backdrop-blur-md rounded-3xl
                    w-[90%] md:w-2/5 h-auto py-10 flex justify-center"
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
                <p className="bg-white py-5 px-6 rounded-l-2xl font-medium text-black flex-1 text-center">
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
