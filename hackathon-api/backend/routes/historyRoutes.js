const express = require("express");
const router = express.Router();
const {
  getHistoryByUserId,
  addHistory,
} = require("../controller/historyControllers");
const {verifyUser} = require("../middleware/middleware");

router
    .route('/')
    .get([verifyUser], getHistoryByUserId)
    .post([verifyUser], addHistory)

module.exports = router;
