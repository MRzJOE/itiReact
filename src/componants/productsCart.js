import React, { Fragment, useContext } from "react";
import { CartContext } from "../Utilits/CartContext";

function ProductsCart(props) {
  const { updateQuantity, removeItem } = useContext(CartContext);

  const handleQuantity = (direction) => {
    if (direction === "Up") {
      updateQuantity(props.sku, 1);
    } else if (direction === "Down" && props.Quantity > 1) {
      updateQuantity(props.sku, -1);
    }
  };
  return (
    <Fragment>
      <tr>
        <td className="align-middle">
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              style={{ width: "50px", height: "50px" }}
              src={props.image}
              alt={props.name}
            />
            <span>{props.name}</span>
          </div>
        </td>
        <td className="text-center align-middle">
          <div id="itemPrice" className="d-flex align-items-center">
            ${props.price.toFixed(2)}
          </div>
        </td>
        <td className="align-middle">
          <div className="bg-white d-flex justify-content-center align-items-center border rounded-2 border-0">
            <button
              className="btn btn-sm"
              onClick={() => handleQuantity("Down")}
            >
              -
            </button>
            <input
              type="text"
              className="border-0 text-center"
              style={{ width: "40px", height: "20px" }}
              readOnly
              value={props.Quantity}
            />
            <button
              className="btn btn-sm py-0 px-1"
              onClick={() => handleQuantity("Up")}
            >
              +
            </button>
          </div>
        </td>
        <td id="itemTotalPrice" className="align-middle text-center">
          ${(props.price * props.Quantity).toFixed(2)}
        </td>
        <td id="itemAction" className="align-middle text-end">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeItem(props.sku)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
export default ProductsCart;
