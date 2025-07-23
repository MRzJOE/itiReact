// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/layout';

import Home from './pages/Home';
import Products from './pages/products';
import Cart from './pages/Cart';
import Error404 from './pages/Error404'; // لو مستخدمها عندك

// هذا هو السطر الجديد الذي يجب إضافته
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          {/* أضف هذا الـ Route لصفحة About Us */}
          <Route path="about-us" element={<AboutUsPage />} />
          {/* أي Routes تانية عندك هنا */}

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;