import { GANT_UPDATE_PERIOD, GANT_UPDATE_GANT_SCALE } from "./Gant.constants";
import { IGantState, GantActionTypes } from "./Gant.types";

const initialState: IGantState = {
  period: {
    finishDate: null,
    startDate: null,
  },
  scale: 100,
};

export default function GantReducer(
  state = initialState,
  action: GantActionTypes
): IGantState {
  switch (action.type) {
    case GANT_UPDATE_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    case GANT_UPDATE_GANT_SCALE: {
      return {
        ...state,
        scale: action.payload,
      };
    }
    default:
      return state;
  }
}
