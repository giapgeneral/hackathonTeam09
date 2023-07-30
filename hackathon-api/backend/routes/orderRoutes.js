const express = require("express");
const {
  createSession,
  createOrder,
} = require("../controller/order.controller");
const { verifyUser } = require("../middleware/middleware");
const router = express.Router();

router.route("/create-session").post([verifyUser], createSession);
router.route("/create").post([verifyUser], createOrder);

module.exports = router;
