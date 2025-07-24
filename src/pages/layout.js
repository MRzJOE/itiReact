import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../componants/Header";
import Footer from "../componants/Footer";

function Layout() {
  const location = useLocation();
  const isUsPage = location.pathname === "/us"; 

  return (
    <Fragment>
      {!isUsPage && <Header />}
      <Outlet />
      {!isUsPage && <Footer />}
    </Fragment>
  );
}

export default Layout;
