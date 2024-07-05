const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MetersDataSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    }, // "02.2023" MM.YYYY
    address: {
      type: String,
      enum: [
        "antonovicha-73",
        "antonovicha-75",
        "antonovicha-75-3",
        "slobozhansky-68a",
        "chelyuskina",
      ],
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
