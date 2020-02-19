import * as ProfileActions from "./constants";
import { FailureActionType } from "../../../store/types";

export interface SystemProfileState {
  isLoading: boolean;
  profile: ProfileState;
}

export interface ProfileState {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  cardName: string;
}

export type ProfileActionType =
  | { type: typeof ProfileActions.GET_PROFILE }
  | { type: typeof ProfileActions.GET_PROFILE_SUCCESS; payload: ProfileState }
  | { type: typeof ProfileActions.UPDATE_PROFILE; input: ProfileState }
  | { type: typeof ProfileActions.UPDATE_PROFILE_SUCCESS; data: ProfileState }
  | FailureActionType;
