import { Router } from "express";
import billingAccountsRoutes from "./billing-accounts-routes";
import utilityPricesRoutes from "./utility-prices-routes";
import meterDataRoutes from "./meter-data-routes";
import monthlyMoneyCalculationsRoutes from "./monthly-money-calculations-routes";
import auditLogsRoutes from "./audit-logs-routes";
import { auditLogger } from "../middleware/audit-logger";
import { auditHttpMethods } from "../constants/http-methods";
import { apiEndpointNames } from "../constants/api-endpoint-names";

const router = Router();

router.use(
    auditLogger([
        auditHttpMethods.post,
        auditHttpMethods.put,
        auditHttpMethods.patch,
        auditHttpMethods.delete,
    ]),
);
router.use(`/${apiEndpointNames.billingAccounts}`, billingAccountsRoutes);
router.use(`/${apiEndpointNames.utilityPrices}`, utilityPricesRoutes);
router.use(`/${apiEndpointNames.meterData}`, meterDataRoutes);
router.use(`/${apiEndpointNames.monthlyMoneyCalculations}`, monthlyMoneyCalculationsRoutes);
router.use(`/${apiEndpointNames.auditLogs}`, auditLogsRoutes);

export default router;
