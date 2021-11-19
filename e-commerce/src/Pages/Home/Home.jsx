import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { OuterLayout } from "../../Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import Slider from "../../Components/Slider/Slider";
import Products from "../../Components/Products/ProductList/Products";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/ProductActions";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();

  const getProduc = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProduc;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <HomeStyled>
      <OuterLayout>
        <Navbar />
      </OuterLayout>
      <Slider />
      <Products />
      <Gallery />
      <NewsLetter />
      <Footer />
    </HomeStyled>
  );
};

export default Home;
