import { Request, Response } from "express";
import { UtilityAccount, IUtilityAccount } from "../models/utility-account";
import { getAllResources } from "../utils/crud-handlers";

export async function getAllUtilityAccount(req: Request, res: Response) {
    await getAllResources<IUtilityAccount>(UtilityAccount, req, res);
}
