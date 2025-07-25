import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategoriesSection from "../components/PopularCategoriesSection";
import ProductCardHome from "../components/ProductCardHome";
import WhyChooseUs from "../components/whychooseus"; // استيراد المكون

import Fcomp from "../components/Fcomp";
import Scomp from "../components/Scomp";
const Home = () => {
  return (
    <main className="container-fluid">
      <HeroSection />

      <div className="container-sm">
        <PopularCategoriesSection />
        <ProductCardHome />
        <WhyChooseUs />
        <Scomp />
      </div>
    </main>
  );
};

export default Home;
