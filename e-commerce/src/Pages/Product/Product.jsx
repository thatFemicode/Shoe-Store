import React from "react";
import {
  ProductStyled,
  Button,
  FilterSizeOption,
  FilterSize,
  FilterContainer,
  Price,
  Desc,
  Title,
  InfoContainer,
  Image,
  ImgContainer,
  Wrapper,
} from "./ProductStyled";
import { OuterLayout } from "../../Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import { CardImage } from "./Media/CardMedia";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/ProductActions";
import { addToCart } from "../../redux/actions/cartAction";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import SkeletonPost from "../../Components/Skeleton/SkeletonPost";
import Footer from "../../Components/Footer/Footer";
const Product = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetail);
  const { loading, error, product } = productDetails;
  // const { imageUrl, price, description, countInStock } = product;
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
  };
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  // console.log([...Array(product.countInStock)]);
  return (
    <ProductStyled>
      <OuterLayout>
        <Navbar />
      </OuterLayout>

      {loading ? (
        <SkeletonPost />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Wrapper>
          <ImgContainer>
            <Image src={product.imageUrl} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <p>
              Status:
              <span>
                {product.countInStock > 0 ? "   In Stock" : "  Out of Stock"}
              </span>
            </p>
            <Desc>{product.description}</Desc>
            <Price>{currency(product.price, "en-NG", "NGN")}</Price>
            <p>
              Quantity
              <FilterSize value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </FilterSize>
            </p>
            <Button onClick={addToCartHandler}>Add To Cart</Button>
          </InfoContainer>
        </Wrapper>
      )}
      <NewsLetter />
      <Footer />
    </ProductStyled>
  );
};

export default Product;
