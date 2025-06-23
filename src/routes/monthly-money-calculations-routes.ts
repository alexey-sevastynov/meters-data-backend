import { Router } from "express";
import { checkApiKey } from "../middleware/check-api-key";
import {
    createMonthMoneyCalculations,
    getAllMonthlyMoneyCalculations,
    getOneMonthMoneyCalculations,
    removeMonthMoneyCalculations,
    updateMonthMoneyCalculations,
} from "../controllers/monthly-money-calculation-controllers";

const router = Router();

router.use("/", checkApiKey, getAllMonthlyMoneyCalculations);
router.get("/:id", checkApiKey, getOneMonthMoneyCalculations);
router.post("/", checkApiKey, createMonthMoneyCalculations);
router.patch("/:id", checkApiKey, updateMonthMoneyCalculations);
router.delete("/:id", checkApiKey, removeMonthMoneyCalculations);

export default router;
