import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { CartStyled } from "./CartStyled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import { OuterLayout } from "../../Layout/Layout";
import { Link } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Modal from "../ChekOut/Modal";
import Footer from "../../Components/Footer/Footer";
import { openModal, closeModal } from "../../redux/actions/Modal";
import { Scrollbars } from "react-custom-scrollbars-2";
const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  console.log(isOpen);
  const { cartItems } = cart;
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const openModall = () => {
    dispatch(openModal());
    // document.body.classList.add("no-scroll");
  };

  const closeModall = () => {
    dispatch(closeModal());
  };
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  return (
    <CartStyled>
      <OuterLayout>
        <Navbar />

        <div className="main">
          <h2>Your Express Cart</h2>
          <div className="cart-body">
            <div className="cart-body-left">
              <div className="cart-body-left-info">
                <Scrollbars>
                  <p>Cart Summary</p>
                  <p>Total: {getCartCount()} items</p>

                  <p>Amount:{currency(getCartSubTotal(), "en-NG", "NGN")}</p>
                  {cartItems.map((item) => {
                    return (
                      <div>
                        <img className="img" src={item.imageUrl} alt="" />
                      </div>
                    );
                  })}
                </Scrollbars>
              </div>
              <div>
                <button onClick={openModall}>Proceed To Checkout</button>
              </div>
            </div>

            <div className="cart-body-right">
              {cartItems.length === 0 ? (
                <div>
                  Your Cart Is Empty <Link to="/">Go Back</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </OuterLayout>
      <NewsLetter />
      <Footer />
      <Modal closeModal={closeModall} />
    </CartStyled>
  );
};

export default Cart;
