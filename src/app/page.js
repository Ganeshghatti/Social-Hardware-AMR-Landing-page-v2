import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import About from "./(pages)/about/page";
import CustomerQuote from "@/components/CustomerQuote";
import Products from "./(pages)/products/page";
import Future from "@/components/Future";

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
        <About />
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
