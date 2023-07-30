const History = require("../models/History");

const getHistoryByUserId = async (req, res) => {
  try {
    const histories = await History.find({userId: req.user._id});

    res.json(histories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addHistory = async (req, res) => {
  const {score} = req.body;
  console.log(score);
  try {
    let history = new History({
      userId: req.user._id,
      highestScore: score
    });
    await history.save();
    res.status(201).send({status: 'ok', history})
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
module.exports = {
  getHistoryByUserId,
  addHistory,
};
