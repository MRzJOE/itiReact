import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ProductsCart from "../componants/productsCart";
import { CartContext } from "../Utilits/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <Fragment>
      <section id="cartItems" className="container-sm">
        <div className="table-responsive">
          <table className="w-100">
            <thead>
              <tr className="p-3">
                <th style={{ width: "40%" }}>Product</th>
                <th style={{ width: "20%" }}>Price</th>
                <th style={{ width: "10%" }} className="text-center">
                  Quantity
                </th>
                <th style={{ width: "10%" }} className="text-center">
                  Total
                </th>
                <th style={{ width: "20%" }} className="text-end p-2 pe-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <h2>No items found</h2>
              ) : (
                cartItems.map((item, inddex) => (
                  <ProductsCart
                    key={inddex}
                    sku={item.sku}
                    name={item.name}
                    price={item.price}
                    Quantity={item.Quantity}
                    image={item.image}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between mt-4 container-sm align-middle">
          <Link to="/products" className="link-secondary">
            → Continue Shopping
          </Link>
          <button className="border rounded-1 text-white btn-primary p-2 btn-sm">
            Check Out
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Cart;
