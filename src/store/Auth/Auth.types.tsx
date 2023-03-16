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

export interface IAuthState {
  data: TokenPayload | null;
  // forgotPassSuccess: boolean;
  // loadingForgotPassword: boolean;
  loadingLogin: boolean;
  loadingRegister: boolean;
  // loadingResetPassword: boolean;
  // resetPassSuccess: boolean;
}

export interface IAuthLoginEmailRequest {
  payload: LoginEmail;
  type: typeof AUTH_LOGIN_EMAIL_REQUEST;
}

interface IAuthLoginSuccess {
  payload: TokenPayload | null;
  type: typeof AUTH_LOGIN_SUCCESS;
}

interface IAuthLoginFailure {
  type: typeof AUTH_LOGIN_FAILURE;
}

export interface IAuthRegisterRequest {
  payload: RegisterUser;
  type: typeof AUTH_REGISTER_REQUEST;
}

interface IAuthRegisterSuccess {
  type: typeof AUTH_REGISTER_SUCCESS;
}

interface IAuthRegisterFailure {
  type: typeof AUTH_REGISTER_FAILURE;
}

interface IAuthLogoutRequest {
  type: typeof AUTH_LOGOUT_REQUEST;
}

interface IAuthLogoutSuccess {
  type: typeof AUTH_LOGOUT_SUCCESS;
}

interface IAuthLogoutFailure {
  type: typeof AUTH_LOGOUT_FAILURE;
}

export type AuthActionsTypes =
  | IAuthLoginEmailRequest
  | IAuthLoginSuccess
  | IAuthLoginFailure
  | IAuthRegisterRequest
  | IAuthRegisterSuccess
  | IAuthRegisterFailure
  | IAuthLogoutRequest
  | IAuthLogoutSuccess
  | IAuthLogoutFailure;
