import { Router } from "express";
import {
    getAllUtilityPrices,
    createUtilityPrice,
    updateUtilityPrice,
} from "../controllers/utility-price-controllers";
import { checkApiKey } from "../middleware/check-api-key";

const router = Router();

router.get("/", checkApiKey, getAllUtilityPrices);
router.post("/", checkApiKey, createUtilityPrice);
router.patch("/:id", checkApiKey, updateUtilityPrice);

export default router;
