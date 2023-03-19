import { GANT_UPDATE_PERIOD, GANT_UPDATE_GANT_SCALE } from "./Gant.constants";
import { Period, GantActionTypes } from "./Gant.types";

export function updateGantPeriod(payload: Period): GantActionTypes {
  return {
    type: GANT_UPDATE_PERIOD,
    payload: payload,
  };
}

export function updateGantScale(payload: number): GantActionTypes {
  return {
    type: GANT_UPDATE_GANT_SCALE,
    payload,
  };
}
