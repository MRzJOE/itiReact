import React, { Fragment, useState } from "react";

function ProductsCart(props) {
  const [count, setCount] = useState(0);

  const handleQuantity = (direction) => {
    if (direction === "Up") {
      setCount((prev) => prev + 1);
    } else if (direction === "Down" && count > 1) {
      setCount((prev) => prev - 1);
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
              src=""
              alt=""
            />
            <span>Organic Lemon</span>
          </div>
        </td>
        <td className="text-center align-middle">
          <div id="itemPrice" className="d-flex align-items-center">
            $56
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
              value={count}
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
          $56
        </td>
        <td id="itemAction" className="align-middle text-end">
          <button className="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
    </Fragment>
  );
}
export default ProductsCart;
