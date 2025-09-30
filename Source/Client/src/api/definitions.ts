export type Domain = 'temperature' | 'humidity' | 'illuminance';

export interface LogAggregate {
    timestamps: number[];
    values: number[];
}
