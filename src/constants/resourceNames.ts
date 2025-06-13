export const resourceNames = {
    utilityPrice: "UtilityPrice",
    metersData: "MetersData",
    billingAccount: "BillingAccount",
    monthlyMoneyCalculation: "MonthlyMoneyCalculation",
} as const;

export type ResourceName = (typeof resourceNames)[keyof typeof resourceNames];
