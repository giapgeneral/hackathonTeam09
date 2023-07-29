const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  color: {
    type: mongoose.Types.ObjectId,
    ref: 'product',
  },
  background: {
    type: mongoose.Types.ObjectId,
    ref: 'product',
  },
});

const Setting = mongoose.model("setting", settingSchema);

module.exports = Setting;
