import { Router } from "express";
import {
    getAllMeterData,
    createMeterData,
    getOneMeterData,
    updateMeterData,
    removeMeterData,
} from "../controllers/meter-data-controllers";
import { checkApiKey } from "../middleware/check-api-key";

const router = Router();

router.get("/", checkApiKey, getAllMeterData);
router.get("/:id", checkApiKey, getOneMeterData);
router.post("/", checkApiKey, createMeterData);
router.patch("/:id", checkApiKey, updateMeterData);
router.delete("/:id", checkApiKey, removeMeterData);

export default router;
