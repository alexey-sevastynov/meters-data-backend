import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { htmlContent } from "./htmlContent";
import {
    getAllUtilityPrices,
    createUtilityPrice,
    updateUtilityPrice,
} from "./controllers/utility-price-controllers";
import {
    getAllMeterData,
    createMeterData,
    getOneMeterData,
    updateMeterData,
    removeMeterData,
} from "./controllers/meter-data-controllers";
import {
    getAllMonthlyMoneyCalculations,
    getOneMonthMoneyCalculations,
    createMonthMoneyCalculations,
    updateMonthMoneyCalculations,
    removeMonthMoneyCalculations,
} from "./controllers/monthly-money-calculation-controllers";
import { getAllBillingAccounts } from "./controllers/billing-account-controllers";
import { checkApiKey } from "./middleware/check-api-key";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI || "", {
        writeConcern: {
            w: "majority",
            j: true,
            wtimeout: 1000,
        },
    })
    .then(() => {
        console.log("DB OK!");
    })
    .catch((err: Error) => console.log("DB error:", err));

app.get("/", (req: Request, res: Response) => {
    res.send(htmlContent);
});

app.get("/billing-accounts", checkApiKey, getAllBillingAccounts);

app.get("/utility-prices", checkApiKey, getAllUtilityPrices);
app.post("/utility-prices", checkApiKey, createUtilityPrice);
app.patch("/utility-prices/:id", checkApiKey, updateUtilityPrice);

app.get("/meter-data", checkApiKey, getAllMeterData);
app.get("/meter-data/:id", checkApiKey, getOneMeterData);
app.post("/meter-data", checkApiKey, createMeterData);
app.patch("/meter-data/:id", checkApiKey, updateMeterData);
app.delete("/meter-data/:id", checkApiKey, removeMeterData);

app.get("/monthly-money-calculations", checkApiKey, getAllMonthlyMoneyCalculations);
app.get("/monthly-money-calculations/:id", checkApiKey, getOneMonthMoneyCalculations);
app.post("/monthly-money-calculations", checkApiKey, createMonthMoneyCalculations);
app.patch("/monthly-money-calculations/:id", checkApiKey, updateMonthMoneyCalculations);
app.delete("/monthly-money-calculations/:id", checkApiKey, removeMonthMoneyCalculations);

app.listen(PORT, (err?: Error) => {
    if (err) {
        return console.log(`Error! ${err.message}`);
    }

    console.log(`Server OK! http://localhost:${PORT}/`);
});
