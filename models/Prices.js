const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PricesSchema = new Schema({
  category: {
    type: String,
    required: true,
  },

  image: { type: [String], required: true },
  valueName: { type: String, enum: ["kW", "m³", "piece"], required: true },
  value: { type: Number, required: true },
});

const Prices = mongoose.model("Prices", PricesSchema);

module.exports = Prices;
