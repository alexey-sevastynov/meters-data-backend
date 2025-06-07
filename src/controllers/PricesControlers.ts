import { Request, Response } from "express";
import Prices, { IPrices } from "../models/Prices";

const getAllServices = async (req: Request, res: Response): Promise<void> => {
    try {
        const listPricesServices: IPrices[] = await Prices.find();

        res.json(listPricesServices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to find prices List" });
    }
};

const createItemPriceService = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = new Prices({
            category: req.body.category,
            image: req.body.image,
            valueName: req.body.valueName,
            value: req.body.value,
        });

        const itemPriceService = await doc.save();

        res.json(itemPriceService);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `failed to create item Price Service ${req.body.valueName}`,
        });
    }
};

const updatePriceService = async (req: Request, res: Response): Promise<void> => {
    try {
        const itemId = req.params.id;

        const doc = await Prices.updateOne({ _id: itemId }, { value: req.body.value });

        if (doc.matchedCount === 0) {
            res.status(404).json({ message: `Price Service with id ${itemId} not found` });
            return;
        }

        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to patch update Price Service" });
    }
};

export { getAllServices, createItemPriceService, updatePriceService };
