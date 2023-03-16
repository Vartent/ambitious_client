import { combineReducers } from "redux";

import authReduser from "./Auth/Auth.reducer";
import projectReducer from "./Project/Project.reducer";

export const rootReducer = combineReducers({
  auth: authReduser,
  project: projectReducer,
});
