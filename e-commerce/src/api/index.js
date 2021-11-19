import axios from "axios";

// const url = 'http://localhost:5000/posts';
const API = axios.create({
  baseURL: "http://localhost:4000",
  //   baseURL: "https://nbablogapp.herokuapp.com/",
});

export const fetchPost = (id) => API.get(`/products/${id}`);
export const fetchPosts = () => API.get("/products");
