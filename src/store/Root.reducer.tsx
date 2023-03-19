import { combineReducers } from "redux";

import authReduser from "./Auth/Auth.reducer";
import GantReducer from "./Gant/Gant.reducer";

export const rootReducer = combineReducers({
  auth: authReduser,
  gant: GantReducer,
});
