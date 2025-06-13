export const resourceNames = {
    prices: "Prices",
    metersData: "MetersData",
    billingAccount: "BillingAccount",
    monthlyMoneyCalculations: "MonthlyMoneyCalculations",
} as const;

export type ResourceName = (typeof resourceNames)[keyof typeof resourceNames];
