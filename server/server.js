const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db");
const productRoutes = require("./route/products");
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/products", productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
