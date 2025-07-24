import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategoriesSection from "../components/PopularCategoriesSection";
import ProductCardHome from "../components/ProductCardHome";

const Home = () => {
  return (
    <main className="container-fluid">
      <HeroSection />
      <div className="container-sm">
        <PopularCategoriesSection />
        <ProductCardHome />
      </div>
    </main>
  );
};

export default Home;
