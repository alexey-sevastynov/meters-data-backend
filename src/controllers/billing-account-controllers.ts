import { Request, Response } from "express";
import { BillingAccount, IBillingAccount } from "../models/billing-account";
import { getAllResources } from "../utils/crud-handlers";

export async function getAllBillingAccounts(req: Request, res: Response) {
    await getAllResources<IBillingAccount>(BillingAccount, req, res);
}
