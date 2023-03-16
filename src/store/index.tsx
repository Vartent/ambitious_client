import { createStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { ENV_DEVELOPMENT } from "@utils";

import { rootReducer } from "./Root.reducer";
import { rootSagas } from "./Root.saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window !== "undefined" &&
  process.env.NODE_ENV === ENV_DEVELOPMENT &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const bindMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const initStore = createStore(rootReducer, bindMiddleware);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof initStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

sagaMiddleware.run(rootSagas);

export default initStore;
