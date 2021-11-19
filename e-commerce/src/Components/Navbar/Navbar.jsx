import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { NavStyled, MenuItem } from "./NavbarStyled";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <NavStyled>
      <div className="left">
        <div className="header">
          <Link to="/">
            <svg
              className="svgs"
              // ref={(el) => (logo = el)}
              width="100"
              height="60.573"
              viewBox="0 0 256 256"
            >
              <path
                fill="none"
                stroke="#000000"
                strokeWidth="13"
                d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="right">
        <MenuItem>
          <a href="/cart">Express Cart</a>
        </MenuItem>
        <MenuItem>
          <FaShoppingCart />
          <span className="cart-number">{getCartCount()}</span>
        </MenuItem>
      </div>
    </NavStyled>
  );
};

export default Navbar;
