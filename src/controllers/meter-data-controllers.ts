import { Request, Response } from "express";
import { IMeterData, MeterData } from "../models/meter-data";
import {
    createResource,
    deleteResource,
    getAllResources,
    getOneResource,
    updateResource,
} from "../utils/crud-handlers";

export async function getAllMeterData(req: Request, res: Response) {
    await getAllResources<IMeterData>(MeterData, req, res);
}

export async function getOneMeterData(req: Request, res: Response) {
    await getOneResource<IMeterData>(MeterData, req, res);
}

export async function createMeterData(req: Request, res: Response) {
    await createResource<IMeterData>(MeterData, req, res);
}

export async function updateMeterData(req: Request, res: Response) {
    await updateResource<IMeterData>(MeterData, req, res);
}

export async function removeMeterData(req: Request, res: Response) {
    await deleteResource<IMeterData>(MeterData, req, res);
}
