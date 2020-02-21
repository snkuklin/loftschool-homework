import { RegistrationData, LoginData, AuthSuccessPayload } from "./types";
import { FailureActionType } from "../../../store/types";

export enum AuthActionTypes {
  CHECK_TOKEN = "CHECK_TOKEN",
  REGISTRATION = "REGISTRATION",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT = "LOGOUT"
}

export type CheckTokenAction = { type: typeof AuthActionTypes.CHECK_TOKEN };
export type RegistrationAction = {
  type: typeof AuthActionTypes.REGISTRATION;
  input: LoginData;
};
export type RegistrationSuccessAction = {
  type: typeof AuthActionTypes.REGISTRATION_SUCCESS;
  payload: AuthSuccessPayload;
};
export type LoginAction = {
  type: typeof AuthActionTypes.LOGIN;
  input: LoginData;
};
export type LoginSuccessAction = {
  type: typeof AuthActionTypes.LOGIN_SUCCESS;
  payload: AuthSuccessPayload;
};
export type LogoutAction = { type: typeof AuthActionTypes.LOGOUT };

export type AuthAction =
  | CheckTokenAction
  | RegistrationAction
  | RegistrationSuccessAction
  | LoginAction
  | LoginSuccessAction
  | LogoutAction
  | FailureActionType;

export function checkToken(): CheckTokenAction {
  return { type: AuthActionTypes.CHECK_TOKEN };
}

export function registration(input: RegistrationData): RegistrationAction {
  return { type: AuthActionTypes.REGISTRATION, input };
}

export function registrationSuccess(
  payload: AuthSuccessPayload
): RegistrationSuccessAction {
  return { type: AuthActionTypes.REGISTRATION_SUCCESS, payload };
}

export function login(input: LoginData): LoginAction {
  return { type: AuthActionTypes.LOGIN, input };
}

export function loginSuccess(payload: AuthSuccessPayload): LoginSuccessAction {
  return { type: AuthActionTypes.LOGIN_SUCCESS, payload };
}

export function logout(): LogoutAction {
  return { type: AuthActionTypes.LOGOUT };
}
