const Setting = require("../models/Setting");

const getSettings = async (req, res) => {
  try {
    const settings = await Setting.find({userId: req.user._id});
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateSetting = async (req, res) => {
  try {
    const {color, background} = req.body;
    const setting = await Setting.findOneAndUpdate(
        {userId: req.user._id},
        {userId: req.user._id, color, background},
        {upsert: true},
    );

    res.json(setting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getSettings,
  updateSetting,
};
