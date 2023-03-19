import { Moment } from "moment";

import { GANT_UPDATE_PERIOD, GANT_UPDATE_GANT_SCALE } from "./Gant.constants";
//change type of period to Range<Moment> everywhere
export type Period = {
  finishDate: Moment | null | undefined;
  startDate: Moment | null | undefined;
};

export interface IGantState {
  period: Period;
  scale: number;
}

export interface IGantUpdateGantPeriod {
  payload: Period;
  type: typeof GANT_UPDATE_PERIOD;
}
export interface IGantUpdateGantScale {
  payload: number;
  type: typeof GANT_UPDATE_GANT_SCALE;
}

export type GantActionTypes = IGantUpdateGantPeriod | IGantUpdateGantScale;
