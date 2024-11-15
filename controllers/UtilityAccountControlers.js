const UtilityAccount = require("../models/UtilityAccount");

const getAllUtilityAccount = async (req, res) => {
  try {
    const listUtilityAccount = await UtilityAccount.find();

    res.json(listUtilityAccount);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find utility account List" });
  }
};

module.exports = { getAllUtilityAccount };
