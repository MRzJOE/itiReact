import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/details.css";

function Header() {
  useEffect(() => {
    const searchBar = document.getElementById("searchBar");
    const searchIcon = document.getElementById("searchIcon");
    const showBtn = document.getElementById("searchShowBtn");
    const hideBtn = document.getElementById("searchHideBtn");

    function toggleSearchBar() {
      if (window.innerWidth < 768) {
        searchBar.style.display = "none";
        searchIcon.style.display = "block";
        showBtn.style.display = "inline-block";
        hideBtn.style.display = "none";
      } else {
        searchBar.style.display = "flex";
        searchIcon.style.display = "none";
      }
    }

    toggleSearchBar();
    window.addEventListener("resize", toggleSearchBar);

    showBtn.addEventListener("click", () => {
      searchBar.style.display = "flex";
      showBtn.style.display = "none";
      hideBtn.style.display = "inline-block";
    });

    hideBtn.addEventListener("click", () => {
      searchBar.style.display = "none";
      showBtn.style.display = "inline-block";
      hideBtn.style.display = "none";
    });

    return () => {
      window.removeEventListener("resize", toggleSearchBar);
    };
  }, []);

  return (
    <header className="top-header">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light text-black">
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="mobileNav">
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
            <select><option>All Categories</option></select>
            <button>🔍</button>
          </div>

          <div className="header-icons">
            <div>👤 Account</div>
            <Link to="/cart">🛒 Cart</Link>
          </div>

          <div id="searchIcon">
            <button id="searchShowBtn" className="mobile-search-btn">🔍</button>
            <button id="searchHideBtn" className="mobile-search-btn" style={{ display: "none" }}>✖️</button>
          </div>
        </div>
      </div>

      <div className="page-title mb-5">Blog Details</div>
    </header>
  );
}

export default Header;
