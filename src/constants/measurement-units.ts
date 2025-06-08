export const measurementUnits = {
    kilowatt: "kW",
    cubicMeter: "m³",
    piece: "piece",
} as const;

export type MeasurementUnit = (typeof measurementUnits)[keyof typeof measurementUnits];
