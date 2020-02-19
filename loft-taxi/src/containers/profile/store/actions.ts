import * as ProfileActions from "./constants";
import { FailureActionType } from "../../../store/actions";

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

export function getProfile(): ProfileActionType {
  return { type: ProfileActions.GET_PROFILE };
}

export function getProfileSuccess(payload: ProfileState): ProfileActionType {
  return { type: ProfileActions.GET_PROFILE_SUCCESS, payload };
}

export function updateProfile(input: ProfileState): ProfileActionType {
  return { type: ProfileActions.UPDATE_PROFILE, input };
}

export function updateProfileSuccess(data: ProfileState): ProfileActionType {
  return { type: ProfileActions.UPDATE_PROFILE_SUCCESS, data };
}
