import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../componants/Header";
import Footer from "../componants/Footer";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Layout;
