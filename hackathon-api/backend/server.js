require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const historyRoutes = require("./routes/historyRoutes");
const settingRoutes = require("./routes/settingRoutes");
const { connectDB } = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});
app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/error.html");
});
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/histories", historyRoutes);
app.use("/api/setting", settingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
