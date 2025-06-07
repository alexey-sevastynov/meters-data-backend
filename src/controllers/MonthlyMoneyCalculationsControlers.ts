import { Request, Response } from "express";
import MonthlyMoneyCalculations, { IMonthlyMoneyCalculations } from "../models/MonthlyMoneyCalculations";

const getAllMonthlyMoneyCalculations = async (req: Request, res: Response): Promise<void> => {
    try {
        const listMonthlyMoneyCalculations: IMonthlyMoneyCalculations[] =
            await MonthlyMoneyCalculations.find();

        res.json(listMonthlyMoneyCalculations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to find list Monthly Money Calculations" });
    }
};

const getOneMonthMoneyCalculations = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;

        const doc = await MonthlyMoneyCalculations.findById(id);
        if (!doc) {
            res.status(404).json({ message: `Month Money Calculations with id ${id} not found` });
            return;
        }
        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `failed to find Month Money Calculations: ${error}` });
    }
};

const createMonthMoneyCalculations = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = new MonthlyMoneyCalculations({
            address: req.body.address,
            data: req.body.data,
            sumMoney: req.body.sumMoney,
        });

        const monthMoneyCalculations = await doc.save();

        res.json(monthMoneyCalculations);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `failed to create month Money Calculations`,
        });
    }
};

const updateMonthMoneyCalculations = async (req: Request, res: Response): Promise<void> => {
    try {
        const itemId = req.params.id;
        const update = {
            address: req.body.address,
            data: req.body.data,
            sumMoney: req.body.sumMoney,
        };

        const doc = await MonthlyMoneyCalculations.updateOne({ _id: itemId }, update);

        if (doc.matchedCount === 0) {
            res.status(404).json({ message: `Month Money Calculations with id ${itemId} not found` });
            return;
        }

        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to patch update Month Money Calculations" });
    }
};

const removeMonthMoneyCalculations = async (req: Request, res: Response): Promise<void> => {
    try {
        const monthlyMoneyCalculationsId = req.params.id;

        const doc = await MonthlyMoneyCalculations.findOneAndDelete({
            _id: monthlyMoneyCalculationsId,
        });

        if (!doc) {
            res.status(404).json({
                message: `Month Money Calculations with id ${monthlyMoneyCalculationsId} not found`,
            });
            return;
        }

        res.json({ ...doc.toObject(), message: `deleted id:${monthlyMoneyCalculationsId}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to delete monthly Money Calculations" });
    }
};

export {
    getAllMonthlyMoneyCalculations,
    getOneMonthMoneyCalculations,
    createMonthMoneyCalculations,
    updateMonthMoneyCalculations,
    removeMonthMoneyCalculations,
};
