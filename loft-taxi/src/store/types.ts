import { FAILURE_ACTION } from "./constants";
import { AuthState } from "../containers/auth/store";
import { SystemProfileState } from "../containers/profile/store";

export interface RootState {
  auth: AuthState;
  profile: SystemProfileState;
}

export interface SuccessPayload {
  success: true;
}

export interface FailurePayload {
  success: false;
  error: string;
}

export type FailureActionType = {
  type: typeof FAILURE_ACTION;
  payload: FailurePayload;
};
