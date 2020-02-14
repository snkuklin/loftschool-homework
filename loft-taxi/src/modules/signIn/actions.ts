export interface LoginData {
  email: string;
  password: string;
}

export interface Payload {
  token?: string;
  error?: string;
}

export type LoginAction =
  | { type: "LOGIN"; input: LoginData }
  | { type: "LOGIN_SUCCESS"; payload: Payload }
  | { type: "LOGIN_FAILURE"; payload: Payload };

export function loginRequest(input: LoginData): LoginAction {
  return { type: "LOGIN", input };
}

export function loginSuccess(payload: Payload): LoginAction {
  return { type: "LOGIN_SUCCESS", payload };
}

export function loginFailure(payload: Payload): LoginAction {
  return { type: "LOGIN_FAILURE", payload };
}
