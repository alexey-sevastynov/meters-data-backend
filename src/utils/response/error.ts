import { Response } from "express";
import { errorMessage } from "../../constants/error-message";
import { sendErrorResponse } from "./helpers";

export function sendNotFoundError(res: Response, resourceName: string, id: string) {
    const message = errorMessage.resourceNotFound.replace("{0}", resourceName).replace("{1}", id);

    sendErrorResponse(res, 404, message);
}

export function sendServerErrorResponse(res: Response, error: unknown) {
    if (error instanceof Error) {
        sendErrorResponse(res, 500, error.message);
    } else {
        sendErrorResponse(res, 500, errorMessage.internalServerError);
    }
}
