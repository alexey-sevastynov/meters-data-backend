export const envKeys = {
    address001: "ADDR_001",
    address002: "ADDR_002",
    address003: "ADDR_003",
    address004: "ADDR_004",
    address005: "ADDR_005",
    mongoDbUri: "MONGODB_URI",
    apiKey: "API_KEY",
} as const;

export type EnvKey = (typeof envKeys)[keyof typeof envKeys];
