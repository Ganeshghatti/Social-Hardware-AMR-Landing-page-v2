import Products from "./(pages)/products/page";
import Future from "@/components/home/Future";
import CustomerQuote from "@/components/home/CustomerQuote";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import Consultation from "@/components/home/Consultation";

export default async function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />
      <div>
        <div>
          <Products />
        </div>
      </div>
      <div>
        <Consultation />
      </div>
      <div>
        <Future />
      </div>
      <div>
        <CustomerQuote />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}
