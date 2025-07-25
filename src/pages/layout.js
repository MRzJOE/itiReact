import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();

  // هيدر مش ظاهر في صفحة /us
  const hideHeader = location.pathname === "/us";

  // دالة بسيطة لتحديد النص اللي هيظهر في الشريط البرتقالي حسب الصفحة
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/Products":
        return "Products";
      case "/about-us":
        return "About Us";
      case "/blog":
        return "Blog Details";
      case "/Signup":
        return "Sign Up";
      default:
        return "";
    }
  };

  return (
    <Fragment>
      {!hideHeader && <Header pageTitle={getPageTitle()} />}
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Layout;
