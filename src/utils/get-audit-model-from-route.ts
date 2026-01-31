import { Model } from "mongoose";
import { MeterData, IMeterData } from "../models/meter-data";
import { BillingAccount, IBillingAccount } from "../models/billing-account";
import { UtilityPrice, IUtilityPrice } from "../models/utility-price";
import { MonthlyMoneyCalculation, IMonthlyMoneyCalculation } from "../models/monthly-money-calculation";
import { apiEndpointNames } from "../constants/api-endpoint-names";

export type AuditableModel =
    | Model<IMeterData>
    | Model<IBillingAccount>
    | Model<IUtilityPrice>
    | Model<IMonthlyMoneyCalculation>;

const auditRouteModelMap: Record<string, AuditableModel> = {
    [apiEndpointNames.meterData]: MeterData,
    [apiEndpointNames.billingAccounts]: BillingAccount,
    [apiEndpointNames.utilityPrices]: UtilityPrice,
    [apiEndpointNames.monthlyMoneyCalculations]: MonthlyMoneyCalculation,
};

export const getAuditModelFromRoute = (url: string) => {
    const path = url.split("?")[0];
    const segments = path.split("/").filter(Boolean);

    for (const segment of segments) {
        if (Object.hasOwn(auditRouteModelMap, segment)) {
            return auditRouteModelMap[segment];
        }
    }

    return null;
};
