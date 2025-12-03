import About from "./(pages)/about/page";
import Products from "./(pages)/products/page";
import Future from "@/components/home/Future";
import CustomerQuote from "@/components/home/CustomerQuote";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";

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
        <Gallery/>
      </div>
    </div>
  );
}
