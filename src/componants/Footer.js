import React from "react";

function Footer() {
  return (
    <footer className="pt-5 bg-light text-dark">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="d-flex align-items-start">
              <img src="../assets/logo.png" alt="Logo" width="40" />
              <div>
                <h5 className="mb-1">Foodzy</h5>
                <small>A Treasure of Tastes</small>
              </div>
            </div>
            <p className="mt-3">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Category</h6>
            <ul className="list-unstyled">
              <li>Dairy & Bakery</li>
              <li>Fruits & Vegetable</li>
              <li>Snack & Spice</li>
              <li>Juice & Drinks</li>
              <li>Chicken & Meat</li>
              <li>Fast Food</li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="fw-bold">Subscribe Our Newsletter</h6>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
              />
              <button className="btn btn-outline-primary" type="button">
                ✈️
              </button>
            </div>

            <div className="image-gallery">
              <img src="../assets/details1.jpg" alt="detail image 1" />
              <img src="../assets/details2.jpg" alt="detail image 2" />
              <img src="../assets/details3.jpg" alt="detail image 3" />
              <img src="" alt="detail image 4" />
              <img src="" alt="detail image 5" />
            </div>

            <div className="text-center pt-4">
              <small>© 2025 foodzy , All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
