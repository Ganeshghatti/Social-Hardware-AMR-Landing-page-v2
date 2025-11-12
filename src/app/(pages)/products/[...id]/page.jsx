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
    <div className="bg-gray-50 text-gray-900">
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-10 z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {product.title}
          </h1>
          <p className="text-lg opacity-80">
            Model ID: {product.id} | Payload: {product.Payload_kg} kg | Reach:{" "}
            {product.Reach_mm} mm
          </p>
        </div>
      </section>

      <div className="bg-orange-500 py-3 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4 text-white">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <div className="flex gap-5">
            <button className="hover:bg-black/40 px-4 py-2 rounded-lg transition-all duration-300">
              Overview
            </button>
            <button className="hover:bg-black/40 px-4 py-2 rounded-lg transition-all duration-300">
              Specs
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-6 text-orange-600">
          Product Specifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(product)
            .filter(
              ([key]) => !["id", "title", "image"].includes(key) // skip non-spec fields
            )
            .map(([key, value]) => (
              <div
                key={key}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-semibold text-gray-700 text-sm mb-1 capitalize">
                  {key.replaceAll("_", " ")}
                </h4>
                <p className="text-gray-900 font-medium">{value}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
