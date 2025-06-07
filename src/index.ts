import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { htmlContent } from "./htmlContent";
import { getAllServices, createItemPriceService, updatePriceService } from "./controllers/PricesControlers";
import {
    getAllMetersData,
    createMeterData,
    getOneMeterData,
    updateMeterData,
    removeMeterData,
} from "./controllers/MetersDataControlers";
import {
    getAllMonthlyMoneyCalculations,
    getOneMonthMoneyCalculations,
    createMonthMoneyCalculations,
    updateMonthMoneyCalculations,
    removeMonthMoneyCalculations,
} from "./controllers/MonthlyMoneyCalculationsControlers";
import { getAllUtilityAccount } from "./controllers/UtilityAccountControlers";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI || "", {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
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

app.get("/utilityaccounts", getAllUtilityAccount);

app.get("/prices", getAllServices);
app.post("/prices", createItemPriceService);
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

app.listen(PORT, (err?: Error) => {
    if (err) {
        return console.log(`Error! ${err.message}`);
    }
    console.log(`Server OK! http://localhost:${PORT}/`);
});
