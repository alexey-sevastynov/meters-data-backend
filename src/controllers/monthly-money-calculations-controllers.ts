import { Request, Response } from "express";
import { IMonthlyMoneyCalculations, MonthlyMoneyCalculations } from "../models/monthly-money-calculations";
import {
    createResource,
    deleteResource,
    getAllResources,
    getOneResource,
    updateResource,
} from "../utils/crud-handlers";

export async function getAllMonthlyMoneyCalculations(req: Request, res: Response) {
    await getAllResources<IMonthlyMoneyCalculations>(MonthlyMoneyCalculations, req, res);
}

export async function getOneMonthMoneyCalculations(req: Request, res: Response) {
    await getOneResource<IMonthlyMoneyCalculations>(MonthlyMoneyCalculations, req, res);
}

export async function createMonthMoneyCalculations(req: Request, res: Response) {
    await createResource<IMonthlyMoneyCalculations>(MonthlyMoneyCalculations, req, res);
}

export async function updateMonthMoneyCalculations(req: Request, res: Response) {
    await updateResource<IMonthlyMoneyCalculations>(MonthlyMoneyCalculations, req, res);
}

export async function removeMonthMoneyCalculations(req: Request, res: Response) {
    await deleteResource<IMonthlyMoneyCalculations>(MonthlyMoneyCalculations, req, res);
}
