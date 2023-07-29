const express = require("express");
const router = express.Router();
const {
  getSettings,
  updateSetting,
} = require("../controller/settingControllers");
const {verifyUser} = require("../middleware/middleware");

router
    .route('/')
    .get([verifyUser], getSettings)
    .post([verifyUser], updateSetting)

module.exports = router;
