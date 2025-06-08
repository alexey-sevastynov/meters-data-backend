import mongoose, { Schema, Document, Model } from "mongoose";
import { MeasurementUnit, measurementUnits } from "@/constants/measurement-units";
import { WithTimestamps } from "@/types/with-timestamps";

export interface IPrices extends Document, WithTimestamps {
    category: string;
    image: string[];
    valueName: MeasurementUnit;
    value: number;
}

const PricesSchema: Schema<IPrices> = new Schema(
    {
        category: { type: String, required: true },
        image: { type: [String], required: true },
        valueName: {
            type: String,
            enum: [measurementUnits.kilowatt, measurementUnits.cubicMeter, measurementUnits.piece],
            required: true,
        },
        value: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const Prices: Model<IPrices> =
    mongoose.models.Prices || mongoose.model<IPrices>("Prices", PricesSchema);
