import { Schema, Document } from "mongoose";
import { getOrRegisterModel } from "../lib/mongoose/get-or-register-model";
import { resourceNames } from "../constants/resourceNames";
import { AuditHttpMethod, auditHttpMethods } from "../constants/http-methods";

export interface IAuditLog<T = object> extends Document {
    resourceName: string;
    action: AuditHttpMethod;
    resourceId?: string;
    oldValue?: T;
    newValue?: T;
    ip?: string;
    userAgent?: string;
}

const AuditLogSchema = new Schema(
    {
        resourceName: { type: String, required: true },
        resourceId: { type: String, required: false },
        action: {
            type: String,
            required: true,
            enum: [
                auditHttpMethods.post,
                auditHttpMethods.put,
                auditHttpMethods.patch,
                auditHttpMethods.delete,
            ],
        },
        oldValue: { type: Schema.Types.Mixed, required: false },
        newValue: { type: Schema.Types.Mixed, required: false },
        ip: { type: String, required: false },
        userAgent: { type: String, required: false },
    },
    {
        timestamps: true,
    },
);

export const AuditLog = getOrRegisterModel<IAuditLog>(resourceNames.auditLog, AuditLogSchema);
