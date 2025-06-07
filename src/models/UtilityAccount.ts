import mongoose, { Schema, Document, Model } from "mongoose";
import { listAddress } from "../constants/address";

export interface IUtilityAccount extends Document {
    address: { type: StringConstructor; enum: (string | undefined)[]; required: true };
    light: string;
    gas: string;
    water: string;
}

const UtilityAccountSchema: Schema<IUtilityAccount> = new Schema(
    {
        address: {
            type: String,
            enum: listAddress,
            required: true,
        },
        light: { type: String, required: true },
        gas: { type: String, required: true },
        water: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const UtilityAccount: Model<IUtilityAccount> = mongoose.model<IUtilityAccount>(
    "UtilityAccount",
    UtilityAccountSchema
);

export default UtilityAccount;
