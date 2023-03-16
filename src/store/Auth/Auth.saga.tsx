import { put, takeLatest, fork, ForkEffect, call } from "redux-saga/effects";

import { AuthHttp } from "@services/http";
import { CookieStorage } from "@services/storage";
import { JWTHelper } from "@utils/helpers";

import {
  //   authLoginEmailRequest,
  authLoginSuccess,
  authLoginFailure,
  authRegisterFailure,
  //   authLogoutRequest,
  //   authLogoutSuccess,
  //   authLogoutFailure,
} from "./Auth.actions";
import {
  AUTH_LOGIN_EMAIL_REQUEST,
  // AUTH_LOGIN_SUCCESS,
  // AUTH_LOGIN_FAILURE,
  AUTH_REGISTER_REQUEST,
  //   AUTH_REGISTER_SUCCESS,
  //   AUTH_REGISTER_FAILURE,
  //   AUTH_LOGOUT_SUCCESS,
  //   AUTH_LOGOUT_FAILURE,
} from "./Auth.constants";
import { IAuthLoginEmailRequest, IAuthRegisterRequest } from "./Auth.types";

function* workerAuthLoginEmail({ payload }: IAuthLoginEmailRequest) {
  try {
    yield call(AuthHttp.login, payload);
    const token = CookieStorage.parseToken();

    // yield localStorage.setItem("access_token", res.access_token);
    yield put(authLoginSuccess(token));
  } catch (error) {
    yield put(authLoginFailure());
  }
}

function* watchAuthLoginEmail() {
  yield takeLatest(AUTH_LOGIN_EMAIL_REQUEST, workerAuthLoginEmail);
}

function* workerAuthRegister(action: IAuthRegisterRequest) {
  try {
    yield call(AuthHttp.register, action.payload);
  } catch (error) {
    put(authRegisterFailure());
  }
}

function* watchAuthRegister() {
  yield takeLatest(AUTH_REGISTER_REQUEST, workerAuthRegister);
}

export const authWatchers: ForkEffect[] = [
  fork(watchAuthLoginEmail),
  fork(watchAuthRegister),
];
