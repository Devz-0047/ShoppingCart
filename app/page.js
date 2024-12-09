import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroBanner from "./components/HeroBanner";
import ProductsSection from "./components/ProductsSection";
import ScrollSpy from "./components/ScrollSpy";

function page() {
  return (
    <div>
      <ScrollSpy />
      <HeroBanner />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}

export default page;
