import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="top-header">
      {/* nav bar */}
      <nav className="navbar navbar-expand-lg navbar-light text-black">
        <img src="../assets/logo.png" style={{ width: "40px" }} alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNav"
          aria-controls="mobileNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="mobileNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/elements">
                Elements
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* logo */}
      <div className="container-sm">
        <div className="header-container">
          <div className="logo">
            <img src="../assets/logo.png" alt="Logo" />
            <div>
              <h2 style={{ margin: 0 }}>Foodzy</h2>
              <small>A Treasure of Tastes</small>
            </div>
          </div>

          {/* button for phone */}
          <div className="search-bar" id="searchBar">
            <input type="text" placeholder="Search For items..." />
            <select>
              <option>All Categories</option>
            </select>
            <button>🔍</button>
          </div>

          <div className="header-icons">
            <div>👤 Account</div>
            <Link to="/Cart">🛒 Cart</Link>
          </div>

          <div id="searchIcon">
            <button id="searchShowBtn" className="mobile-search-btn">
              🔍
            </button>
            <button
              id="searchHideBtn"
              className="mobile-search-btn"
              style={{ display: "none" }}
            >
              ✖️
            </button>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="page-title mb-5">Blog Details</div>
    </header>
  );
}

export default Header;
