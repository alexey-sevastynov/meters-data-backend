import dotenv from "dotenv";

dotenv.config();

const listAddress = [
    process.env.ADDR_003,
    process.env.ADDR_004,
    process.env.ADDR_005,
    process.env.ADDR_002,
    process.env.ADDR_001,
];

export { listAddress };
