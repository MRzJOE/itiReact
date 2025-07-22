import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="container-sm text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="mb-4">
              <h1
                className="display-1 fw-bold text-primary"
                style={{ fontSize: "8rem", color: "#f53e32" }}
              >
                404
              </h1>
            </div>

            <div className="mb-4">
              <h2 className="h3 mb-3" style={{ color: "#362020" }}>
                Oops! Page Not Found
              </h2>
              <p className="lead text-muted mb-4">
                The page you're looking for doesn't exist or has been moved.
                Don't worry, it happens to the best of us!
              </p>
            </div>

            <div className="mb-5">
              <div
                className="d-inline-block p-4 rounded-circle"
                style={{ backgroundColor: "#f8f9fa", fontSize: "4rem" }}
              >
                🍕
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <Link
                to="/"
                className="btn btn-primary px-4 py-2 rounded-2"
                style={{
                  backgroundColor: "#f53e32",
                  border: "none",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                🏠 Go Home
              </Link>

              <Link
                to="/Products"
                className="btn btn-outline-primary px-4 py-2 rounded-2"
                style={{
                  borderColor: "#f53e32",
                  color: "#f53e32",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f53e32";
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#f53e32";
                  e.target.style.transform = "scale(1)";
                }}
              >
                🍕 Browse Menu
              </Link>
            </div>

            <div className="mt-5">
              <p className="text-muted small">
                Need help? Check out our{" "}
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "#f53e32" }}
                >
                  delicious menu
                </Link>{" "}
                or contact our support team.
              </p>
            </div>
          </div>
        </div>

        <div
          className="position-absolute"
          style={{ top: "20%", left: "10%", opacity: "0.1", fontSize: "2rem" }}
        >
          🍔
        </div>
        <div
          className="position-absolute"
          style={{ top: "30%", right: "15%", opacity: "0.1", fontSize: "2rem" }}
        >
          🌮
        </div>
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            left: "20%",
            opacity: "0.1",
            fontSize: "2rem",
          }}
        >
          🍰
        </div>
        <div
          className="position-absolute"
          style={{
            bottom: "30%",
            right: "10%",
            opacity: "0.1",
            fontSize: "2rem",
          }}
        >
          🍟
        </div>
      </div>
    </div>
  );
}

export default Error404;
