import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { htmlContent } from "./htmlContent";
import { getAllServices, createItemPriceService, updatePriceService } from "./controllers/prices-controllers";
import {
    getAllMetersData,
    createMeterData,
    getOneMeterData,
    updateMeterData,
    removeMeterData,
} from "./controllers/meters-data-controllers";
import {
    getAllMonthlyMoneyCalculations,
    getOneMonthMoneyCalculations,
    createMonthMoneyCalculations,
    updateMonthMoneyCalculations,
    removeMonthMoneyCalculations,
} from "./controllers/monthly-money-calculations-controllers";
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

app.get("/prices", checkApiKey, getAllServices);
app.post("/prices", checkApiKey, createItemPriceService);
app.patch("/prices/:id", checkApiKey, updatePriceService);

app.get("/metersdatas", checkApiKey, getAllMetersData);
app.get("/metersdatas/:id", checkApiKey, getOneMeterData);
app.post("/metersdatas", checkApiKey, createMeterData);
app.patch("/metersdatas/:id", checkApiKey, updateMeterData);
app.delete("/metersdatas/:id", checkApiKey, removeMeterData);

app.get("/monthlymoneycalculations", checkApiKey, getAllMonthlyMoneyCalculations);
app.get("/monthlymoneycalculations/:id", checkApiKey, getOneMonthMoneyCalculations);
app.post("/monthlymoneycalculations", checkApiKey, createMonthMoneyCalculations);
app.patch("/monthlymoneycalculations/:id", checkApiKey, updateMonthMoneyCalculations);
app.delete("/monthlymoneycalculations/:id", checkApiKey, removeMonthMoneyCalculations);

app.listen(PORT, (err?: Error) => {
    if (err) {
        return console.log(`Error! ${err.message}`);
    }

    console.log(`Server OK! http://localhost:${PORT}/`);
});
