import React, { useContext } from "react";
import { menuData } from "../data";
import { CartContext } from "../utils/CartContext";

function Products() {
  const menuDate = menuData;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (pizaa) => {
    addToCart(pizaa);
    console.log(`${pizaa.name} added to cart!`);
  };

  return (
    <section id="Products" className="container-sm my-5">
      <div className="mb-3">
        <p className="display-5">Our Products</p>
      </div>
      <div className="row">
        {menuDate.pizza.map((pizzaa) => (
          <div key={pizzaa.sku} className="col-md-3 mb-3">
            <div className="card h-100">
              <img
                src={pizzaa.image}
                className="card-img-top"
                alt={pizzaa.name}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="text-muted">{pizzaa.category}</h6>
                <h5 className="card-title">{pizzaa.name}</h5>
                <p className="card-text mt-4">${pizzaa.price.toFixed(2)}</p>
                <button
                  className={`btn btn-primary mt-auto rounded-2 py-2 add-to-cart-btn`}
                  onClick={() => handleAddToCart(pizzaa)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                  style={{
                    transition: "all 0.3s ease",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
