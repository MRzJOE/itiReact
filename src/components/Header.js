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
    <header className="top-header bg-white shadow-sm">
      <div className="container-fluid px-3 px-md-4">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileNav"
                aria-controls="mobileNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobileNav">
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
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row align-items-center justify-content-between py-3">
          {/* Logo */}
          <div className="col-12 col-md-3 col-lg-2 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="me-2"
                style={{ height: "40px" }}
              />
              <div>
                <h4 className="mb-0 fw-bold text-dark">Foodzy</h4>
                <small className="text-muted">A Treasure of Tastes</small>
              </div>
            </div>
          </div>

          {/* Header Icons */}
          <div className="col-12 col-md-3 col-lg-3">
            <div className="d-flex align-items-center justify-content-end gap-3">
              {/* Account */}
              <div className="d-flex align-items-center text-dark text-decoration-none">
                <span className="me-1">👤</span>
                <span className="d-none d-lg-inline">Account</span>
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="d-flex align-items-center text-dark text-decoration-none"
              >
                <span className="me-1">🛒</span>
                <span className="d-none d-lg-inline">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-danger text-white text-center py-3">
        <h5 className="mb-0">Blog Details</h5>
      </div>
    </header>
  );
}

export default Header;
