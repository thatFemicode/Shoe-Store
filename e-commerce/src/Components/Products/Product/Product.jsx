import React from "react";
import { ProductStyled } from "./ProductStyled";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { imageUrl, description, price, name, _id } = product;
  const handleMouseOver = (e) => {
    e.target.style.transform = "translateZ(200px) rotateZ(10deg)";
    // container.current.style.transform = "scale(1.1)";
  };
  const handleLeave = (e) => {
    e.target.style.transform = "unset";
  };
  return (
    <ProductStyled>
      <div className="product-info">
        <p className="info-name">{name}</p>
        <p className="info-description">{description.substring(0, 50)}...</p>
        <p className="info-price">#{price}</p>
      </div>
      <img
        onMouseOver={handleMouseOver}
        onMouseLeave={handleLeave}
        src={imageUrl}
        alt=""
      />
      <Link to={`/product/${_id}`} className="info-button">
        View Product
      </Link>
    </ProductStyled>
  );
};

export default Product;
