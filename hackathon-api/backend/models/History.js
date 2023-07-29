const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  highestScore: {
    type: Number,
    required: true,
  },
});

const History = mongoose.model("history", historySchema);

module.exports = History;
