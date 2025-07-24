import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategoriesSection from "../components/PopularCategoriesSection";
import ProductCardHome from "../componants/ProductCardHome";

const Home = () => {
  return (
    <main className="container-sm">
      <HeroSection />
      <PopularCategoriesSection />

      <ProductCardHome />
    </main>
  );
};

export default Home;
