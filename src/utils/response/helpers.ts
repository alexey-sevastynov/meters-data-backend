import { Response } from "express";

export function sendListResponse<T>(res: Response, data: T[]) {
    res.status(200).json(data);
}

export function sendItemResponse<T>(res: Response, item: T) {
    res.status(200).json(item);
}

export function sendItemResponseWithMessage<T>(res: Response, item: T, message: string) {
    res.status(200).json({ ...item, message });
}

export function sendErrorResponse(res: Response, statusCodeError: number, errorMessage: string) {
    res.status(statusCodeError).json({ error: errorMessage });
}
