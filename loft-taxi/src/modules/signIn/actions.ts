import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export interface LoginData {
  email: string;
  password: string;
}

export interface Payload {
  token?: string;
  error?: string;
}

export type LoginAction =
  | { type: typeof LOGIN; input: LoginData }
  | { type: typeof LOGIN_SUCCESS; payload: Payload }
  | { type: typeof LOGIN_FAILURE; payload: Payload };

export function loginRequest(input: LoginData): LoginAction {
  return { type: LOGIN, input };
}

export function loginSuccess(payload: Payload): LoginAction {
  return { type: LOGIN_SUCCESS, payload };
}

export function loginFailure(payload: Payload): LoginAction {
  return { type: LOGIN_FAILURE, payload };
}
