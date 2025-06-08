import { Response } from "express";
import { sendItemResponseWithMessage } from "./helpers";
import { successMessage } from "../../constants/success-message";

export function sendDeleteSuccessResponse<T>(res: Response, item: T, resourceName: string, id: string) {
    const message = successMessage.deletedResource.replace("{0}", resourceName).replace("{1}", id);

    sendItemResponseWithMessage(res, item, message);
}

export function sendUpdateSuccessResponse<T>(res: Response, item: T, resourceName: string, id: string) {
    const message = successMessage.updatedResource.replace("{0}", resourceName).replace("{1}", id);

    sendItemResponseWithMessage(res, item, message);
}
