import * as AuthActions from "./constants";
import {
  SuccessPayload,
  FailurePayload,
  FailureActionType
} from "../../../store/types";

export interface AuthState {
  error?: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

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

export interface AuthSuccessPayload extends SuccessPayload {
  token: string;
}

export type AuthPayload = AuthSuccessPayload | FailurePayload;

export type AuthActionType =
  | { type: typeof AuthActions.CHECK_TOKEN }
  | { type: typeof AuthActions.REGISTRATION; input: RegistrationData }
  | { type: typeof AuthActions.LOGIN; input: LoginData }
  | { type: typeof AuthActions.LOGIN_SUCCESS; payload: AuthSuccessPayload }
  | { type: typeof AuthActions.LOGOUT }
  | FailureActionType;
