import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "../constants/address";

export interface IMetersData extends Document {
    date: { type: StringConstructor; required: true };
    address: { type: StringConstructor; enum: (string | undefined)[]; required: true };
    light?: number;
    lightDay: number;
    lightNight: number;
    gas: number;
    water: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const MetersDataSchema: Schema<IMetersData> = new Schema(
    {
        date: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            enum: listAddress,
            required: true,
        },
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

const MetersData: Model<IMetersData> = mongoose.model<IMetersData>("MetersData", MetersDataSchema);

export default MetersData;
