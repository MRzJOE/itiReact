import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/signup.css";
import "./styles/details.css";
import "./styles/us.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Layout from "./pages/layout";
import Blog from "./pages/blog";
import { menuData } from "./data";
import Products from "./pages/products";
import { CartProvider } from "./utils/CartContext";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/us";

console.log("Menu Data:", menuData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home name="" />} />
          <Route path="Products" element={<Products />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
          <Route path="blog" element={<Blog />} />
      <Route path="us" element={<TeamPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
