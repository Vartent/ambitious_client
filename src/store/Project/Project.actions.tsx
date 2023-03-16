import { Moment } from "moment";
import { RangeValue } from "rc-picker/lib/interface";

import {
  PROJECT_UPDATE_PERIOD,
  PROJECT_UPDATE_GANT_SCALE,
} from "./Project.constants";
import { Period, ProjectActionTypes } from "./Project.types";

export function updateGantPeriod(payload: Period): ProjectActionTypes {
  return {
    type: PROJECT_UPDATE_PERIOD,
    payload: payload,
  };
}

export function updateGantScale(payload: number): ProjectActionTypes {
  return {
    type: PROJECT_UPDATE_GANT_SCALE,
    payload,
  };
}
