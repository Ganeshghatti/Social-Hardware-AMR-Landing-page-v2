import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import About from "./(pages)/about/page";
import CustomerQuote from "@/components/CustomerQuote";
import Products from "./(pages)/products/page";
import Future from "@/components/Future";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div>
        <About />
        <Future />
      </div>

      <div>
        <Products />
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
