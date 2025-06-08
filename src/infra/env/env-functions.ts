import dotenv from "dotenv";
import { EnvKey } from "./env-keys";

dotenv.config();

export function getEnvVariable(name: EnvKey) {
    const value = process.env[name];

    if (!value) {
        throw new Error(errorMessage.missingEnvironmentVariable.replace("{0}", name));
    }

    return value;
}
