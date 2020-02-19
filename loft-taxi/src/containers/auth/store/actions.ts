import * as AuthActions from "./constants";
import { FailureActionType } from "../../../store/actions";

export interface RegistrationData {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginPayload {
  token?: string;
  error?: string;
}

export type LoginActionType =
  | { type: typeof AuthActions.CHECK_TOKEN }
  | { type: typeof AuthActions.REGISTRATION; input: RegistrationData }
  | { type: typeof AuthActions.LOGIN; input: LoginData }
  | { type: typeof AuthActions.LOGIN_SUCCESS; payload: LoginPayload }
  | { type: typeof AuthActions.LOGOUT }
  | FailureActionType;

export function checkToken(): LoginActionType {
  return { type: AuthActions.CHECK_TOKEN };
}

export function registration(input: RegistrationData): LoginActionType {
  return { type: AuthActions.REGISTRATION, input };
}

export function login(input: LoginData): LoginActionType {
  return { type: AuthActions.LOGIN, input };
}

export function loginSuccess(payload: LoginPayload): LoginActionType {
  return { type: AuthActions.LOGIN_SUCCESS, payload };
}

export function logout(): LoginActionType {
  return { type: AuthActions.LOGOUT };
}
