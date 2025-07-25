import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategoriesSection from "../components/PopularCategoriesSection";
import ProductCardHome from "../components/ProductCardHome";
import WhyChooseUs from "../components/whychooseus"; // استيراد المكون

const Home = () => {
  return (
    
    <main className="container-fluid">
      <HeroSection />

      <div className="container-sm">
        <PopularCategoriesSection />
        <ProductCardHome />
        <WhyChooseUs /> {/* إضافة المكون هنا */}
      </div>
    </main>
  );
};

export default Home;
