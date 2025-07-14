// src/app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Products from "./components/Products";

export default function HomePage() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Services />
      <Products />
    </>
  );
}
