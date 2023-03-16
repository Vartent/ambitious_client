import { all } from "redux-saga/effects";

import { authWatchers } from "./Auth/Auth.saga";

export function* rootSagas() {
  const watchers = [...authWatchers];

  yield all(watchers);
}
