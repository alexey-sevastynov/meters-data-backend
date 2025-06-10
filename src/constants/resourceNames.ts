export const resourceNames = {
    prices: "Prices",
    metersData: "MetersData",
    billingAccounts: "BillingAccounts",
    monthlyMoneyCalculations: "MonthlyMoneyCalculations",
} as const;

export type ResourceName = (typeof resourceNames)[keyof typeof resourceNames];
