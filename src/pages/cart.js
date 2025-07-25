import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ProductsCart from "../components/productsCart";
import { CartContext } from "../utils/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <Fragment>
      <section id="cartItems" className="container-sm">
        <div className="table-responsive">
          <table className="w-100">
            <thead>
              <tr className="p-3">
                <th style={{ width: "40%" }}>Products</th>
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
                cartItems.map((item) => (
                  <ProductsCart
                    key={item.id}
                    sku={item.sku}
                    name={item.name}
                    price={item.price}
                    Quantity={item.Quantity}
                    image={item.image}
                  />
                ))
              )}
            </tbody>
            <tfoot>
              {cartItems.length > 0 && (
                <tr className="border-top">
                  <td colSpan="4" className="text-end fw-bold p-3 fs-3">
                    Sub Total:
                  </td>
                  <td className="text-end fw-bold p-3 fs-4">
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.Quantity,
                        0
                      )
                      .toFixed(2)}
                  </td>
                </tr>
              )}
            </tfoot>
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
