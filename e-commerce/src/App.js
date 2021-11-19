// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainStyled } from "./MainStyled";
import { ThemeProvider } from "styled-components";
import CustomRoute from "./Components/CustomSwitch/CustomSwitch";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/ChekOut/Modal";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  adapt: "399px",
  se: "330px",
  teams: "350px",
  foot: "375px",
  max: "420px",
  blogNav: "610px",
  min: "520px",
  make: "548px",
  mobile: "500px",
  desktop: "768px",
  player: "751px",
  dont: "1020px",
  dose: "1025px",
  balls: "930px",
  post: "940px",
  kobe: "1200px",
  mind: "1100px",
  mins: "1300px",
  minsx: "1280px",
  shoe: "1270px",
  minss: "1500px",
  team: "1800px",
  img: "1201px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <CustomRoute>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<CheckOut />} /> */}
        </CustomRoute>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
