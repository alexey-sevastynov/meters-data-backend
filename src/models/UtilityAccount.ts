import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "@/constants/address";
import { WithTimestamps } from "@/types/with-timestamps";

export interface IUtilityAccount extends Document, WithTimestamps {
    address: string;
    light: string;
    gas: string;
    water: string;
}

const UtilityAccountSchema: Schema<IUtilityAccount> = new Schema(
    {
        address: { type: String, enum: listAddress, required: true },
        light: { type: String, required: true },
        gas: { type: String, required: true },
        water: { type: String, required: true },
    },
    { timestamps: true }
);

export const UtilityAccount: Model<IUtilityAccount> =
    mongoose.models.UtilityAccount || mongoose.model<IUtilityAccount>("UtilityAccount", UtilityAccountSchema);
