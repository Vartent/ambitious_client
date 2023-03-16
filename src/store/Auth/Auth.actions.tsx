import { LoginEmail, RegisterUser } from "../../entities/Auth/Auth";
import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_EMAIL_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
} from "./Auth.constants";
import { AuthActionsTypes } from "./Auth.types";

export function authLoginEmailRequest(payload: LoginEmail): AuthActionsTypes {
  return {
    type: AUTH_LOGIN_EMAIL_REQUEST,
    payload,
  };
}
export function authLoginSuccess(
  payload: TokenPayload | null
): AuthActionsTypes {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload,
  };
}
export function authLoginFailure(): AuthActionsTypes {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}

export function authRegisterRequest(payload: RegisterUser): AuthActionsTypes {
  return {
    type: AUTH_REGISTER_REQUEST,
    payload,
  };
}

export function authRegisterSuccess(): AuthActionsTypes {
  return {
    type: AUTH_REGISTER_SUCCESS,
  };
}

export function authRegisterFailure(): AuthActionsTypes {
  return {
    type: AUTH_REGISTER_FAILURE,
  };
}

export function authLogoutRequest(): AuthActionsTypes {
  return {
    type: AUTH_LOGOUT_REQUEST,
  };
}

export function authLogoutSuccess(): AuthActionsTypes {
  return {
    type: AUTH_LOGOUT_SUCCESS,
  };
}

export function authLogoutFailure(): AuthActionsTypes {
  return {
    type: AUTH_LOGOUT_FAILURE,
  };
}
