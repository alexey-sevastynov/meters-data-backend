import { Request, Response } from "express";
import { IUtilityPrice, UtilityPrice } from "../models/utility-price";
import { createResource, getAllResources, updateResource } from "../utils/crud-handlers";

export async function getAllUtilityPrices(req: Request, res: Response) {
    await getAllResources<IUtilityPrice>(UtilityPrice, req, res);
}

export async function createUtilityPrice(req: Request, res: Response) {
    await createResource<IUtilityPrice>(UtilityPrice, req, res);
}

export async function updateUtilityPrice(req: Request, res: Response) {
    await updateResource<IUtilityPrice>(UtilityPrice, req, res);
}
