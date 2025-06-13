import { Schema, Document } from "mongoose";
import { MeasurementUnit, measurementUnits } from "../constants/measurement-units";
import { WithTimestamps } from "../types/with-timestamps";
import { resourceNames } from "../constants/resourceNames";
import { getOrRegisterModel } from "../lib/mongoose/get-or-register-model";

export interface IUtilityPrice extends Document, WithTimestamps {
    category: string;
    image: string[];
    valueName: MeasurementUnit;
    value: number;
}

const UtilityPriceSchema: Schema<IUtilityPrice> = new Schema(
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

export const UtilityPrice = getOrRegisterModel<IUtilityPrice>(resourceNames.utilityPrice, UtilityPriceSchema);
