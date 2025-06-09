import { Request, Response, NextFunction } from "express";
import { sendErrorResponse } from "../utils/response/helpers";
import { errorMessage } from "../constants/error-message";
import { getEnvVariable } from "../infra/env/env-functions";
import { envKeys } from "../infra/env/env-keys";

export function checkApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKeyFromClient = req.header("x-api-key");

    if (!apiKeyFromClient) {
        return sendErrorResponse(res, 401, errorMessage.apiKeyMissing);
    }

    const serverApiKey = getEnvVariable(envKeys.apiKey);

    if (apiKeyFromClient !== serverApiKey) {
        return sendErrorResponse(res, 401, errorMessage.apiKeyInvalid);
    }

    next();
}
