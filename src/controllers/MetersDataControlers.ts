import { Request, Response } from "express";
import { IMetersData, MetersData } from "@/models/MetersData";

const getAllMetersData = async (req: Request, res: Response): Promise<void> => {
    try {
        const listMetersData: IMetersData[] = await MetersData.find();
        res.json(listMetersData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to find meters data list" });
    }
};

const getOneMeterData = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const doc = await MetersData.findById(id);
        if (!doc) {
            res.status(404).json({ message: `Meter data with id ${id} not found` });
            return;
        }
        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `failed to find meter data: ${error}` });
    }
};

const createMeterData = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = new MetersData({
            date: req.body.date,
            address: req.body.address,
            light: req.body.light,
            lightDay: req.body.lightDay,
            lightNight: req.body.lightNight,
            gas: req.body.gas,
            water: req.body.water,
        });

        const meterData = await doc.save();
        res.json(meterData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `failed to create meter data ${req.body.address}, ${error}`,
        });
    }
};

const updateMeterData = async (req: Request, res: Response): Promise<void> => {
    try {
        const itemId = req.params.id;
        const update = {
            date: req.body.date,
            address: req.body.address,
            light: req.body.light,
            lightDay: req.body.lightDay,
            lightNight: req.body.lightNight,
            gas: req.body.gas,
            water: req.body.water,
        };

        const doc = await MetersData.updateOne({ _id: itemId }, update);

        if (doc.matchedCount === 0) {
            res.status(404).json({ message: `Meter data with id ${itemId} not found` });
            return;
        }

        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to patch update Meter Data" });
    }
};

const removeMeterData = async (req: Request, res: Response): Promise<void> => {
    try {
        const meterDataId = req.params.id;
        const doc = await MetersData.findOneAndDelete({ _id: meterDataId });

        if (!doc) {
            res.status(404).json({ message: `Meter data with id ${meterDataId} not found` });
            return;
        }

        res.json({ ...doc.toObject(), message: `deleted id:${meterDataId}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to delete meter data" });
    }
};

export { getAllMetersData, createMeterData, getOneMeterData, updateMeterData, removeMeterData };
