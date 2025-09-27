export type Domain = 'temperature' | 'humidity' | 'lux';

export interface LogAggregate {
    timestamps: number[];
    values: number[];
}
