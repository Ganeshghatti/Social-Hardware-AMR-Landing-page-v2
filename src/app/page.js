import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import About from "./(pages)/about/page";
import CustomerQuote from "@/components/CustomerQuote";
import Products from "./(pages)/products/page";
import Future from "@/components/Future";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />
      <div>
        <div>
          <Products />
        </div>
        <Future />
      </div>
       <div>
        <About/>
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
