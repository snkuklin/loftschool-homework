import { SuccessPayload, FailurePayload } from "../../../store/types";

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

export interface AuthSuccessPayload extends SuccessPayload {
  token: string;
}

export type AuthPayload = AuthSuccessPayload | FailurePayload;
