import * as AuthActions from "./constants";
import {
  RegistrationData,
  LoginData,
  AuthActionType,
  AuthSuccessPayload
} from "./types";

export function checkToken(): AuthActionType {
  return { type: AuthActions.CHECK_TOKEN };
}

export function registration(input: RegistrationData): AuthActionType {
  return { type: AuthActions.REGISTRATION, input };
}

export function login(input: LoginData): AuthActionType {
  return { type: AuthActions.LOGIN, input };
}

export function authSuccess(payload: AuthSuccessPayload): AuthActionType {
  return { type: AuthActions.LOGIN_SUCCESS, payload };
}

export function logout(): AuthActionType {
  return { type: AuthActions.LOGOUT };
}
