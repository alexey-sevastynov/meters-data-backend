import { Schema, Document } from "mongoose";
import { listAddress } from "../constants/address";
import { WithTimestamps } from "../types/with-timestamps";
import { resourceNames } from "../constants/resourceNames";
import { getOrRegisterModel } from "../lib/mongoose/get-or-register-model";

export interface IBillingAccount extends Document, WithTimestamps {
    address: string;
    light: string;
    gas: string;
    water: string;
}

const BillingAccountSchema: Schema<IBillingAccount> = new Schema(
    {
        address: { type: String, enum: listAddress, required: true },
        light: { type: String, required: true },
        gas: { type: String, required: true },
        water: { type: String, required: true },
    },
    { timestamps: true }
);

export const BillingAccount = getOrRegisterModel<IBillingAccount>(
    resourceNames.billingAccount,
    BillingAccountSchema
);
