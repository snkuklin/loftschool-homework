import { FAILURE_ACTION } from "./constants";
import { AuthState } from "../containers/auth/store";
import { SystemProfileState } from "../containers/profile/store";
import { AddressesList, RouteState } from "../containers/map/store";

export interface RootState {
  auth: AuthState;
  profile: SystemProfileState;
  addresses: AddressesList;
  currentRoute: RouteState;
}

export interface SuccessPayload {
  success: true;
}

export interface FailurePayload {
  success: false;
  error: string;
}

export type Payload = SuccessPayload | FailurePayload;

export type FailureActionType = {
  type: typeof FAILURE_ACTION;
  payload: FailurePayload;
};
