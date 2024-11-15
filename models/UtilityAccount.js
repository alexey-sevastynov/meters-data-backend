const mongoose = require("mongoose");
const { listAddress } = require("../constants/address");

const Schema = mongoose.Schema;

const utilityAccountSchema = new Schema({
  address: {
    type: String,
    enum: listAddress,
    required: true,
  },
  light: { type: String, required: true },
  gas: { type: String, required: true },
  water: { type: String, required: true },
});

const UtilityAccount = mongoose.model("UtilityAccount", utilityAccountSchema);

module.exports = UtilityAccount;
