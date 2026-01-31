export const resourceNames = {
    utilityPrice: "UtilityPrice",
    meterData: "MeterData",
    billingAccount: "BillingAccount",
    monthlyMoneyCalculation: "MonthlyMoneyCalculation",
    auditLog: "AuditLog",
} as const;

export type ResourceName = (typeof resourceNames)[keyof typeof resourceNames];
