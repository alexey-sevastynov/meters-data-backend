const mongoose = require("mongoose");
const { listAddress } = require("../constants/address");

const Schema = mongoose.Schema;

const MonthlyMoneyCalculationsSchema = new Schema({
  address: {
    type: String,
    enum: listAddress,
    required: true,
  },

  data: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],

  sumMoney: { type: Number, required: true },
});

const MonthlyMoneyCalculations = mongoose.model(
  "MonthlyMoneyCalculations",
  MonthlyMoneyCalculationsSchema
);

module.exports = MonthlyMoneyCalculations;
