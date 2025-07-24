import React from "react";

<<<<<<< HEAD
function Home() {
  return <h1 className="text-center text-primary">Home</h1>;
}
=======
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
>>>>>>> ae8a990318bcb29ba178bd6203ef366ba2a8f5f0

export default Home;
