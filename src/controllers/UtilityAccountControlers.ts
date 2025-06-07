import { Request, Response } from "express";
import UtilityAccount, { IUtilityAccount } from "../models/UtilityAccount";

const getAllUtilityAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const listUtilityAccount: IUtilityAccount[] = await UtilityAccount.find();
        res.json(listUtilityAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to find utility account List" });
    }
};

export { getAllUtilityAccount };
