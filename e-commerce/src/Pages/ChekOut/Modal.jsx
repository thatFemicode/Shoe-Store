import React from "react";
import { ModalStyled, ModalContainer } from "./ModalStyled";
import { useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars-2";
const CheckOut = ({ closeModal }) => {
  const { isOpen } = useSelector((state) => state.modal);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  console.log(isOpen);
  return (
    <ModalStyled
      className={`${isOpen ? "modal-overlay show" : "modal-overlay"}`}
    >
      <ModalContainer>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaWindowClose />
        </button>
        <h1 className="heading">Thank you for shopping with Express</h1>
        <Scrollbars style={{ width: "80%" }}>
          <div className="order">
            <h1>Your order for the following products is on the way</h1>
            {cartItems.map((item) => {
              const { product, imageUrl } = item;

              return (
                <div>
                  <img src={imageUrl} alt="" />
                  <p key={product}> ProductId: {product}</p>
                </div>
              );
            })}
            <p className="total">
              Total Amount: {currency(getCartSubTotal(), "en-NG", "NGN")}
            </p>
          </div>
        </Scrollbars>
        {/* <h1>Thank you for Shopping with Express</h1> */}
      </ModalContainer>
    </ModalStyled>
  );
};

export default CheckOut;
