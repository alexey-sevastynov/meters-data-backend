import { Router } from "express";
import { checkApiKey } from "../middleware/check-api-key";
import { getAllBillingAccounts } from "../controllers/billing-account-controllers";

const router = Router();

router.get("/", checkApiKey, getAllBillingAccounts);

export default router;
