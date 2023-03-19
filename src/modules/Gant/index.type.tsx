import moment, { Moment } from "moment";

export enum TimeUnits {
  days = "days",
  hours = "hours",
  weeks = "weeks",
}

export interface Duration {
  amount: number | null;
  units: TimeUnits;
}

export interface DataType {
  chart?: any | null;
  children?: DataType[];
  description: string;
  duration?: Duration;
  key: number;
  name: string;
  startDate?: Moment;
}
