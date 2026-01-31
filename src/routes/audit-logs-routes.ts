import { Router } from "express";
import { getAllAuditLogs, getOneAuditLog, removeAuditLog } from "../controllers/audit-logs-controllers";
import { checkApiKey } from "../middleware/check-api-key";

const router = Router();

router.get("/", checkApiKey, getAllAuditLogs);
router.get("/:id", checkApiKey, getOneAuditLog);
router.delete("/:id", checkApiKey, removeAuditLog);

export default router;
