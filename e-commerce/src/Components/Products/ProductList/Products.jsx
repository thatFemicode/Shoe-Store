import React from "react";
import { ProductsStyled } from "./ProductsStyled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import SkeletonPost from "../../Skeleton/SkeletonPost";
import { getProducts } from "../../../redux/actions/ProductActions";
import Product from "../Product/Product";
const Products = () => {
  const container = useRef(null);
  const dispatch = useDispatch();
  const getProduc = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProduc;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <ProductsStyled>
      <div className="product-text">
        <h1>Products in sotre</h1>
        <p>Checkout some of the products in storage</p>
        <p>Open products to add to cart</p>
      </div>
      <div className="products-container">
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonPost key={n} />)}
        {products.map((product, index) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </ProductsStyled>
  );
};

export default Products;
