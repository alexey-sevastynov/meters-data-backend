import mongoose from "mongoose";
import { mongooseLogMessages } from "./mongoose-log-messages";
import { getEnvVariable } from "../../env/env-functions";
import { envKeys } from "../../env/env-keys";
import { getMongooseOptions } from "./mongoose-options";

export async function initializeDatabaseConnection() {
    const mongoDbUri = getEnvVariable(envKeys.mongoDbUri);
    const mongooseOptions = getMongooseOptions();

    console.log(mongooseLogMessages.connecting);

    try {
        await mongoose.connect(mongoDbUri, mongooseOptions);

        console.log(mongooseLogMessages.success);
    } catch (error) {
        console.error(mongooseLogMessages.failure);
        console.error(formatMongooseErrorMessage(error));

        process.exit(1);
    }
}

function formatMongooseErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return mongooseLogMessages.error.replace("{0}", error.message);
    }

    const serialized = JSON.stringify(error, null, 2);

    return mongooseLogMessages.error.replace("{0}", serialized);
}
