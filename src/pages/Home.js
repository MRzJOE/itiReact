import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategoriesSection from "../components/PopularCategoriesSection";
import ProductsCart from "../componants/productsCart";

const Home = () => {
  return (
    <main className="container-sm">
      <HeroSection />

      <ProductsCart />

      <PopularCategoriesSection />
    </main>
  );
};

export default Home;
