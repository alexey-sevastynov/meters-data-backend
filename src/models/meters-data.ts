import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "../constants/address";
import { WithTimestamps } from "../types/with-timestamps";

export interface IMetersData extends Document, WithTimestamps {
    date: string;
    address: string;
    light?: number;
    lightDay: number;
    lightNight: number;
    gas: number;
    water: number;
}

const MetersDataSchema: Schema<IMetersData> = new Schema(
    {
        date: { type: String, required: true },
        address: { type: String, enum: listAddress, required: true },
        light: Number,
        lightDay: { type: Number, required: true },
        lightNight: { type: Number, required: true },
        gas: { type: Number, required: true },
        water: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const MetersData: Model<IMetersData> =
    mongoose.models.MetersData || mongoose.model<IMetersData>("MetersData", MetersDataSchema);
