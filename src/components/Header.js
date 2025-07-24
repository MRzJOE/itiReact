import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/details.css";

function Header() {
  useEffect(() => {
    const mobileSearchBar = document.getElementById("mobileSearchBar");
    const showBtn = document.getElementById("searchShowBtn");
    const hideBtn = document.getElementById("searchHideBtn");

    if (showBtn && hideBtn && mobileSearchBar) {
      showBtn.addEventListener("click", () => {
        mobileSearchBar.style.display = "block";
      });

      hideBtn.addEventListener("click", () => {
        mobileSearchBar.style.display = "none";
      });
    }

    // Cleanup event listeners
    return () => {
      if (showBtn && hideBtn) {
        showBtn.removeEventListener("click", () => {});
        hideBtn.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <header className="top-header parent-container">
      {/* Search Icon فوق يمين */}
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

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="mobileNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/us">
                US
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Logo & Search & Icons */}
      <div className="container-sm">
        <div className="header-container">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" />
            <div>
              <h2 style={{ margin: 0 }}>Foodzy</h2>
              <small>A Treasure of Tastes</small>
            </div>
          </div>

          <div className="search-bar" id="searchBar">
            <input type="text" placeholder="Search For items..." />
            <select>
              <option>All Categories</option>
            </select>
            <button>🔍</button>
          </div>

          <div className="header-icons">
            <div>👤 Account</div>
            <Link to="/cart">🛒 Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
