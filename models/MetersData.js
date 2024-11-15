const mongoose = require("mongoose");
const { listAddress } = require("../constants/address");

const Schema = mongoose.Schema;

const MetersDataSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    }, // "02.2023" MM.YYYY
    address: {
      type: String,
      enum: listAddress,
      required: true,
    },
    light: Number,
    lightDay: { type: Number, required: true },
    lightNight: { type: Number, required: true },
    gas: { type: Number, required: true },
    water: { type: Number, required: true },
  },
  {
    timestamps: true, // new unique date create
  }
);

const MetersData = mongoose.model("MetersData", MetersDataSchema);

module.exports = MetersData;
