import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPrices extends Document {
    category: string;
    image: string[];
    valueName: "kW" | "m³" | "piece";
    value: number;
}

const PricesSchema: Schema<IPrices> = new Schema(
    {
        category: { type: String, required: true },
        image: { type: [String], required: true },
        valueName: { type: String, enum: ["kW", "m³", "piece"], required: true },
        value: { type: Number, required: true },
    },
    {
        timestamps: true, // если нужно, добавь метки времени
    }
);

const Prices: Model<IPrices> = mongoose.model<IPrices>("Prices", PricesSchema);

export default Prices;
