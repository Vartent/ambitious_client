import { CookieStorage, LocalStorage } from "@services/storage";
import { LOCAL_FRIEND_KEY } from "@utils";

import {
  AUTH_LOGIN_EMAIL_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE,
} from "./Auth.constants";
import { IAuthState, AuthActionsTypes } from "./Auth.types";

const initialState: IAuthState = {
  data: CookieStorage.parseToken(),
  loadingLogin: false,
  loadingRegister: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActionsTypes
): IAuthState {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
      };
    case AUTH_LOGIN_EMAIL_REQUEST:
      return {
        ...state,
        loadingLogin: true,
      };
    case AUTH_LOGIN_SUCCESS: {
      localStorage.removeItem(LOCAL_FRIEND_KEY);

      return {
        ...state,
        data: CookieStorage.parseToken(),
        loadingLogin: false,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      LocalStorage.removeItem(LOCAL_FRIEND_KEY);

      return {
        ...state,
        data: CookieStorage.parseToken(),
        loadingRegister: false,
      };
    }
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        data: null,
      };
    case AUTH_LOGIN_FAILURE:
    case AUTH_LOGOUT_FAILURE:
    case AUTH_REGISTER_FAILURE:
      return {
        ...state,
        loadingLogin: false,
        loadingRegister: false,
      };
    default:
      return state;
  }
}
