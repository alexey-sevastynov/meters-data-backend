import { getEnvVariable } from "@/infra/env/env-functions";
import { envKeys } from "@/infra/env/env-keys";

export const listAddress = [
    getEnvVariable(envKeys.address001),
    getEnvVariable(envKeys.address002),
    getEnvVariable(envKeys.address003),
    getEnvVariable(envKeys.address004),
    getEnvVariable(envKeys.address005),
] as const;
