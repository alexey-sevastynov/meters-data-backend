const express = require("express");
const mongoose = require("mongoose");

const { htmlContent } = require("./htmlContent");
const {
  getAllServices,
  createItemPriceService,
  updatePriceService,
} = require("./controllers/PricesControlers");

require("dotenv").config();

const app = express();

app.use(express.json());
const PORT = 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then((client) => {
    console.log("DB OK!");
  })
  .catch((err) => console.log("DB error:", err));

app.get("/", (req, res) => {
  res.send(htmlContent);
});

app.get(`/home`, getAllServices);
app.post(`/home`, createItemPriceService);
app.patch("/home/:id", updatePriceService);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error! ${err}`);
  }

  console.log(`Server OK! http://localhost:${PORT}/`);
});
