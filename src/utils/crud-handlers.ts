import { Model } from "mongoose";
import { Response, Request } from "express";
import { sendItemResponse, sendListResponse } from "./response/helpers";
import { sendNotFoundError, sendServerErrorResponse } from "./response/error";
import { sendDeleteSuccessResponse, sendUpdateSuccessResponse } from "./response/success";

export async function getAllResources<T>(model: Model<T>, req: Request, res: Response) {
    try {
        const allResources = await model.find();

        sendListResponse(res, allResources);
    } catch (error) {
        sendServerErrorResponse(res, error);
    }
}

export async function getOneResource<T>(model: Model<T>, req: Request, res: Response) {
    try {
        const item = await model.findById(req.params.id);

        if (!isResourceFound(res, item, model.modelName, req.params.id)) return;

        sendItemResponse(res, item);
    } catch (error) {
        sendServerErrorResponse(res, error);
    }
}

export async function createResource<T>(model: Model<T>, req: Request, res: Response) {
    try {
        const document = new model(req.body);
        const createdItem = await document.save();

        sendItemResponse(res, createdItem);
    } catch (error) {
        sendServerErrorResponse(res, error);
    }
}

export async function updateResource<T>(model: Model<T>, req: Request, res: Response) {
    try {
        const item = await model.updateOne({ _id: req.params.id }, req.body);

        if (item.matchedCount === 0) {
            sendNotFoundError(res, model.modelName, req.params.id);

            return;
        }

        sendUpdateSuccessResponse(res, item, model.modelName, req.params.id);
    } catch (error) {
        sendServerErrorResponse(res, error);
    }
}

export async function deleteResource<T>(model: Model<T>, req: Request, res: Response) {
    try {
        const item = await model.findOneAndDelete({ _id: req.params.id });

        if (!isResourceFound(res, item, model.modelName, req.params.id)) return;

        sendDeleteSuccessResponse(res, item, model.modelName, req.params.id);
    } catch (error) {
        sendServerErrorResponse(res, error);
    }
}

function isResourceFound<T>(res: Response, item: T | null, resourceName: string, id: string) {
    if (!item) {
        sendNotFoundError(res, resourceName, id);

        return false;
    }

    return true;
}
