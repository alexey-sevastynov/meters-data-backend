import { Request, Response } from "express";
import { IMetersData, MetersData } from "../models/meters-data";
import {
    createResource,
    deleteResource,
    getAllResources,
    getOneResource,
    updateResource,
} from "../utils/crud-handlers";

export async function getAllMetersData(req: Request, res: Response) {
    await getAllResources<IMetersData>(MetersData, req, res);
}

export async function getOneMeterData(req: Request, res: Response) {
    await getOneResource<IMetersData>(MetersData, req, res);
}

export async function createMeterData(req: Request, res: Response) {
    await createResource<IMetersData>(MetersData, req, res);
}

export async function updateMeterData(req: Request, res: Response) {
    await updateResource<IMetersData>(MetersData, req, res);
}

export async function removeMeterData(req: Request, res: Response) {
    await deleteResource<IMetersData>(MetersData, req, res);
}
