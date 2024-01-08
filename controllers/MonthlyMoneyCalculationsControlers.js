const MonthlyMoneyCalculations = require("../models/MonthlyMoneyCalculations");

const getAllMonthlyMoneyCalculations = async (req, res) => {
  try {
    const listMonthlyMoneyCalculations = await MonthlyMoneyCalculations.find();

    res.json(listMonthlyMoneyCalculations);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ massage: "failed to find list Monthly Money Calculations" });
  }
};

const getOneMonthMoneyCalculations = async (req, res) => {
  try {
    const id = req.params.id;

    MonthlyMoneyCalculations.findById(id)
      .then((doc) => res.json(doc))
      .catch((err) =>
        res.status(414).json({
          message: `failed to find Month Money Calculations: ${err}`,
        })
      );
  } catch (error) {
    res
      .status(500)
      .json({ massage: `failed to find Month Money Calculations: ${error}` });
  }
};

const createMonthMoneyCalculations = async (req, res) => {
  try {
    const doc = new MonthlyMoneyCalculations({
      address: req.body.address,
      data: req.body.data,
      sumMoney: req.body.sumMoney,
    });

    const monthMoneyCalculations = await doc.save();

    res.json(monthMoneyCalculations);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      massage: `failed to create month Money Calculations`,
    });
  }
};

const updateMonthMoneyCalculations = async (req, res) => {
  try {
    const ItemId = req.params.id;
    MonthlyMoneyCalculations.updateOne(
      { _id: ItemId },
      {
        address: req.body.address,
        data: req.body.data,
        sumMoney: req.body.sumMoney,
      }
    )
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res
          .status(414)
          .json({ message: `failed to patch update Month Money Calculations` });
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ massage: "failed to patch update Month Money Calculations" });
  }
};

const removeMonthMoneyCalculations = async (req, res) => {
  try {
    const monthlyMoneyCalculationsId = req.params.id;

    MonthlyMoneyCalculations.findOneAndDelete({
      _id: monthlyMoneyCalculationsId,
    })
      .then((doc) =>
        res.json({ ...doc, message: `delete id:${monthlyMoneyCalculationsId}` })
      )
      .catch((err) =>
        res
          .status(414)
          .json({ message: "failed to delete monthly Money Calculations" })
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ massage: "failed to delete monthly Money Calculations" });
  }
};

module.exports = {
  getAllMonthlyMoneyCalculations,
  getOneMonthMoneyCalculations,
  createMonthMoneyCalculations,
  updateMonthMoneyCalculations,
  removeMonthMoneyCalculations,
};
