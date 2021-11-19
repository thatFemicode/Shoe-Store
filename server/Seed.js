const dotenv = require("dotenv");

dotenv.config();

const productData = require("./Products/data");
const connectDB = require("./config/db");
const Product = require("./model/Produts");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
