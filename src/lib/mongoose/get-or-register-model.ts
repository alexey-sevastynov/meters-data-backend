import mongoose, { Model, Schema } from "mongoose";
import { ResourceName } from "../../constants/resourceNames";

export function getOrRegisterModel<T>(resourceName: ResourceName, schema: Schema<T>) {
    const registeredModel = getModelIfRegistered<T>(resourceName);
    const createModel = registerMongooseModel<T>(resourceName, schema);

    const model = registeredModel ?? createModel;

    return model;
}

function getModelIfRegistered<T>(resourceName: ResourceName) {
    const model = mongoose.models[resourceName];

    return model ? (model as Model<T>) : undefined;
}

export function registerMongooseModel<T>(modelName: ResourceName, schema: Schema<T>) {
    const model = mongoose.model<T>(modelName, schema);

    return model;
}
