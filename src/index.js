import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/signup.css";
import "./styles/details.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";  
import Layout from "./pages/layout";
import { menuData } from "./data";
import Products from "./pages/products";
import { CartProvider } from "./Utilits/CartContext";
import ProductsCart from "./componants/productsCart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Blog from "./pages/blog"; 

console.log("Menu Data:", menuData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
<Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>

);
