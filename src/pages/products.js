import React from "react";
import { menuData } from "../data";

function Products() {
  const menuDate = menuData;
  const handleAddToCart = () => {
    // console.log(`${title} added to cart!`);
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
                  className="card-text mt-auto btn-primary rounded-2 py-2"
                  onClick={handleAddToCart}
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
