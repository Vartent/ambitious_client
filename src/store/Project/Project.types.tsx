import { Moment } from "moment";
import { RangeValue } from "rc-picker/lib/interface";

import {
  PROJECT_UPDATE_PERIOD,
  PROJECT_UPDATE_GANT_SCALE,
} from "./Project.constants";
//change type of period to Range<Moment> everywhere
export type Period = {
  finishDate: Moment | null | undefined;
  startDate: Moment | null | undefined;
};

export interface IProjectState {
  period: Period;
  scale: number;
}

export interface IProjectUpdateGantPeriod {
  payload: Period;
  type: typeof PROJECT_UPDATE_PERIOD;
}
export interface IProjectUpdateGantScale {
  payload: number;
  type: typeof PROJECT_UPDATE_GANT_SCALE;
}

export type ProjectActionTypes =
  | IProjectUpdateGantPeriod
  | IProjectUpdateGantScale;
