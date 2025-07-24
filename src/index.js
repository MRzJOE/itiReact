import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/signup.css";
import "./styles/details.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Layout from "./pages/layout";
import Blog from "./pages/blog";
 // صفحة التفاصيل
import Us from "./pages/us"; // ✅ استوردنا صفحة us
import Products from "./pages/products";
import { menuData } from "./data";
import { CartProvider } from "./Utilits/CartContext";

console.log("Menu Data:", menuData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="blog" element={<Blog />} />
          <Route path="us" element={<Us />} /> {/* ✅ دي صفحة us */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
