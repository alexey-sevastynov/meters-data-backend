import { Request, Response } from "express";
import { IMonthlyMoneyCalculation, MonthlyMoneyCalculation } from "../models/monthly-money-calculation";
import {
    createResource,
    deleteResource,
    getAllResources,
    getOneResource,
    updateResource,
} from "../utils/crud-handlers";

export async function getAllMonthlyMoneyCalculations(req: Request, res: Response) {
    await getAllResources<IMonthlyMoneyCalculation>(MonthlyMoneyCalculation, req, res);
}

export async function getOneMonthMoneyCalculations(req: Request, res: Response) {
    await getOneResource<IMonthlyMoneyCalculation>(MonthlyMoneyCalculation, req, res);
}

export async function createMonthMoneyCalculations(req: Request, res: Response) {
    await createResource<IMonthlyMoneyCalculation>(MonthlyMoneyCalculation, req, res);
}

export async function updateMonthMoneyCalculations(req: Request, res: Response) {
    await updateResource<IMonthlyMoneyCalculation>(MonthlyMoneyCalculation, req, res);
}

export async function removeMonthMoneyCalculations(req: Request, res: Response) {
    await deleteResource<IMonthlyMoneyCalculation>(MonthlyMoneyCalculation, req, res);
}
