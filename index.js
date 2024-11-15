const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { htmlContent } = require("./htmlContent");
const {
  getAllServices,
  createItemPriceService,
  updatePriceService,
} = require("./controllers/PricesControlers");

const {
  getAllMetersData,
  createMeterData,
  getOneMeterData,
  updateMeterData,
  removeMeterData,
} = require("./controllers/MetersDataControlers");

const {
  getAllMonthlyMoneyCalculations,
  getOneMonthMoneyCalculations,
  createMonthMoneyCalculations,
  updateMonthMoneyCalculations,
  removeMonthMoneyCalculations,
} = require("./controllers/MonthlyMoneyCalculationsControlers");
const {
  getAllUtilityAccount,
} = require("./controllers/UtilityAccountControlers");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  })
  .then((client) => {
    console.log("DB OK!");
  })
  .catch((err) => console.log("DB error:", err));

app.get("/", (req, res) => {
  res.send(htmlContent);
});

app.get("/utilityaccounts", getAllUtilityAccount);

app.get(`/prices`, getAllServices);
app.post(`/prices`, createItemPriceService);
app.patch("/prices/:id", updatePriceService);

app.get("/metersdatas", getAllMetersData);
app.get("/metersdatas/:id", getOneMeterData);
app.post("/metersdatas", createMeterData);
app.patch("/metersdatas/:id", updateMeterData);
app.delete("/metersdatas/:id", removeMeterData);

app.get("/monthlymoneycalculations", getAllMonthlyMoneyCalculations);
app.get("/monthlymoneycalculations/:id", getOneMonthMoneyCalculations);
app.post("/monthlymoneycalculations", createMonthMoneyCalculations);
app.patch("/monthlymoneycalculations/:id", updateMonthMoneyCalculations);
app.delete("/monthlymoneycalculations/:id", removeMonthMoneyCalculations);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error! ${err}`);
  }

  console.log(`Server OK! http://localhost:${PORT}/`);
});
