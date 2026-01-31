import { Request, Response } from "express";
import { AuditLog, IAuditLog } from "../models/audit-log";
import { deleteResource, getAllResources, getOneResource } from "../utils/crud-handlers";

export async function getAllAuditLogs(req: Request, res: Response) {
    await getAllResources<IAuditLog>(AuditLog, req, res);
}

export async function getOneAuditLog(req: Request, res: Response) {
    await getOneResource<IAuditLog>(AuditLog, req, res);
}

export async function removeAuditLog(req: Request, res: Response) {
    await deleteResource<IAuditLog>(AuditLog, req, res);
}
