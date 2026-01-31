import { Model, Document } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { getAuditModelFromRoute, AuditableModel } from "../utils/get-audit-model-from-route";
import { AuditLog } from "../models/audit-log";
import { AuditHttpMethod, auditHttpMethods } from "../constants/http-methods";
import { WithObjectId } from "../types/with-object-id";

export const auditLogger = (targetActions: AuditHttpMethod[]) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        if (!isAuditAction(request.method)) return next();

        if (!targetActions.includes(request.method)) return next();

        const modelFromRoute = getAuditModelFromRoute(request.originalUrl);

        if (!modelFromRoute) return next();

        const auditResourceName = modelFromRoute.modelName;
        const resourceId = request.params.id;
        const oldResourceValue = await getOldResourceValue(modelFromRoute, resourceId, request.method);

        const originalSend = response.send.bind(response);
        let responseBody: unknown;

        response.send = (body: unknown) => {
            responseBody = body;

            return originalSend(body);
        };

        response.on("finish", async () => {
            try {
                if (response.statusCode >= 400) return;

                const newResourceValue = getNewResourceValue(responseBody, request.method);
                const auditResourceId = getAuditResourceId(request.method, resourceId, newResourceValue);

                const auditLog = new AuditLog({
                    resourceName: auditResourceName,
                    resourceId: auditResourceId,
                    action: request.method,
                    oldValue: oldResourceValue,
                    newValue: newResourceValue,
                    ip: request.ip,
                    userAgent: request.get("User-Agent"),
                });

                await auditLog.save();
            } catch (err) {
                console.error("[AuditLogger] Error saving log:", err);
            }
        });

        next();
    };
};

function isAuditAction(httpActionMethod: string): httpActionMethod is AuditHttpMethod {
    return Object.values(auditHttpMethods).some((auditAction) => auditAction === httpActionMethod);
}

async function getOldResourceValue(model: AuditableModel, resourceId: string, action: AuditHttpMethod) {
    if (action === auditHttpMethods.post) return null;

    try {
        const document = await (model as unknown as Model<Document>).findById(resourceId).lean();

        return document ?? null;
    } catch (err) {
        console.error(`[AuditLogger] Error fetching old value for ${model.modelName}:`, err);
        return null;
    }
}

function getNewResourceValue<T = WithObjectId>(responseBody: unknown, method: string) {
    if (method === auditHttpMethods.delete) return null;

    if (typeof responseBody === "object") return responseBody as T;

    if (typeof responseBody === "string") {
        try {
            return JSON.parse(responseBody) as T;
        } catch {
            return null;
        }
    }

    return null;
}

function getAuditResourceId<T extends WithObjectId>(method: string, resourceId: string, newValue: T | null) {
    if (method === auditHttpMethods.post && newValue?._id) return newValue._id;

    return resourceId;
}
