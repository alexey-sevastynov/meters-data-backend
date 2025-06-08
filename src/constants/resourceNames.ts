export const resourceNames = {
    prices: "Prices",
    metersData: "MetersData",
    utilityAccount: "UtilityAccount",
    monthlyMoneyCalculations: "MonthlyMoneyCalculations",
} as const;

export type ResourceName = (typeof resourceNames)[keyof typeof resourceNames];
