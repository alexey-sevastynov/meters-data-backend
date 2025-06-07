import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "../constants/address";

interface IDataItem {
    title: string;
    description: string;
}

export interface IMonthlyMoneyCalculations extends Document {
    address: { type: StringConstructor; enum: (string | undefined)[]; required: true };
    data: IDataItem[];
    sumMoney: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const DataItemSchema: Schema<IDataItem> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const MonthlyMoneyCalculationsSchema: Schema<IMonthlyMoneyCalculations> = new Schema(
    {
        address: {
            type: String,
            enum: listAddress,
            required: true,
        },
        data: [DataItemSchema],
        sumMoney: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const MonthlyMoneyCalculations: Model<IMonthlyMoneyCalculations> = mongoose.model<IMonthlyMoneyCalculations>(
    "MonthlyMoneyCalculations",
    MonthlyMoneyCalculationsSchema
);

export default MonthlyMoneyCalculations;
