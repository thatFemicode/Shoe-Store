import React from "react";
import { CartItemStyled } from "./CartItemStyled";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const { imageUrl, name, price, countInStock, product } = item;

  return (
    <CartItemStyled>
      <div className="cart-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="cart-actions">
        <Link to={`/product/${product}`} className="cartItem-name">
          <p>{name}</p>
        </Link>
        <p>Product ID: {product}</p>
        <div className="action">
          <select
            value={item.qty}
            onChange={(e) => qtyChangeHandler(product, e.target.value)}
            className="cartItem-select"
          >
            {[...Array(countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <button
            className="cartItem-deleteBtn"
            onClick={() => removeHandler(product)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
