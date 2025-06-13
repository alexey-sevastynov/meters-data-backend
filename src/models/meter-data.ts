import { Schema, Document } from "mongoose";
import { listAddress } from "../constants/address";
import { WithTimestamps } from "../types/with-timestamps";
import { getOrRegisterModel } from "../lib/mongoose/get-or-register-model";
import { resourceNames } from "../constants/resourceNames";

export interface IMeterData extends Document, WithTimestamps {
    date: string;
    address: string;
    light?: number;
    lightDay: number;
    lightNight: number;
    gas: number;
    water: number;
}

const MeterDataSchema: Schema<IMeterData> = new Schema(
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

export const MeterData = getOrRegisterModel<IMeterData>(resourceNames.meterData, MeterDataSchema);
