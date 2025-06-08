import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "@/constants/address";
import { WithTimestamps } from "@/types/with-timestamps";
import { CalculationData } from "@/types/calculation-data";

export interface IMonthlyMoneyCalculations extends Document, WithTimestamps {
    address: string;
    data: CalculationData[];
    sumMoney: number;
}

const DataItemSchema: Schema<CalculationData> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const MonthlyMoneyCalculationsSchema: Schema<IMonthlyMoneyCalculations> = new Schema(
    {
        address: { type: String, enum: listAddress, required: true },
        data: [DataItemSchema],
        sumMoney: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const MonthlyMoneyCalculations: Model<IMonthlyMoneyCalculations> =
    mongoose.models.MonthlyMoneyCalculations ||
    mongoose.model<IMonthlyMoneyCalculations>("MonthlyMoneyCalculations", MonthlyMoneyCalculationsSchema);
