import { Request, Response } from "express";
import { IPrices, Prices } from "../models/Prices";
import { createResource, getAllResources, updateResource } from "../utils/crud-handlers";

export async function getAllServices(req: Request, res: Response) {
    await getAllResources<IPrices>(Prices, req, res);
}

export async function createItemPriceService(req: Request, res: Response) {
    await createResource<IPrices>(Prices, req, res);
}

export async function updatePriceService(req: Request, res: Response) {
    await updateResource<IPrices>(Prices, req, res);
}
