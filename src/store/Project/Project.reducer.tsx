import {
  PROJECT_UPDATE_PERIOD,
  PROJECT_UPDATE_GANT_SCALE,
} from "./Project.constants";
import { IProjectState, ProjectActionTypes } from "./Project.types";

const initialState: IProjectState = {
  period: {
    finishDate: null,
    startDate: null,
  },
  scale: 0,
};

export default function projectReducer(
  state = initialState,
  action: ProjectActionTypes
): IProjectState {
  switch (action.type) {
    case PROJECT_UPDATE_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    case PROJECT_UPDATE_GANT_SCALE: {
      return {
        ...state,
        scale: action.payload / 2,
      };
    }
    default:
      return state;
  }
}
