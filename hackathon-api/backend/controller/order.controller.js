const { getSdk } = require("../config/candypay");
const { sendResponseError } = require("../middleware/middleware");
const Order = require("../models/Order");
const Product = require("../models/Product");

const createSession = async (req, res) => {
  try {
    console.log("req", req.body);
    const sdk = await getSdk();
    const products = req.body.products.map((product) => {
      return {
        name: product.name,
        price: parseFloat(product.price),
        image: product?.imageUrl || "",
        quantity: 1,
      };
    });
    const response = await sdk.session.create({
      success_url: `${process.env.URL}/success`,
      cancel_url: `${process.env.URL}/cancel`,
      // additional tokens you can pass, SOL and USDC are default
      items: [...products],
    });
    console.log("response 3232", response);
    res.status(200).send({ status: "ok", data: response });
    return;
  } catch (error) {
    console.log("Eorror : ", error);
    sendResponseError(500, "Error creating session", res);
    return;
  }
};

const createOrder = async (req, res) => {
  try {
    await Order.create({ ...req.body });
    res.status(200).send("Create Order Successfully");
    return;
  } catch (error) {
    console.log(error);
    sendResponseError(500, `Error ${error}`, res);
    return;
  }
};
module.exports = { createSession, createOrder };
