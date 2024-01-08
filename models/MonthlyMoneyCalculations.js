const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MonthlyMoneyCalculationsSchema = new Schema({
  address: {
    type: String,
    enum: [
      "antonovicha-73",
      "antonovicha-75",
      "slobozhansky-68a",
      "chelyuskina",
    ],
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
});

const MonthlyMoneyCalculations = mongoose.model(
  "MonthlyMoneyCalculations",
  MonthlyMoneyCalculationsSchema
);

module.exports = MonthlyMoneyCalculations;
