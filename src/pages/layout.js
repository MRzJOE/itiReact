import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Porducts">Products</Link>
            </li>
            <li>
              <Link to="./Cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </Fragment>
  );
}

export default Layout;
