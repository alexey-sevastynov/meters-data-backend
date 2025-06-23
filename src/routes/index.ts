import { Router } from "express";
import billingAccountsRoutes from "./billing-accounts-routes";
import utilityPricesRoutes from "./utility-prices-routes";
import meterDataRoutes from "./meter-data-routes";
import monthlyMoneyCalculationsRoutes from "./monthly-money-calculations-routes";

const router = Router();

router.use("/billing-accounts", billingAccountsRoutes);
router.use("/utility-prices", utilityPricesRoutes);
router.use("/meter-data", meterDataRoutes);
router.use("/monthly-money-calculations", monthlyMoneyCalculationsRoutes);

export default router;
