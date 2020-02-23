import { ProfileState } from "./types";
import { FailureActionType } from "../../../store/types";

export enum ProfileActionTypes {
  GET_PROFILE = "GET_PROFILE",
  GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS",
  UPDATE_PROFILE = "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"
}

export type GetProfileAction = { type: typeof ProfileActionTypes.GET_PROFILE };
export type GetProfileSuccessAction = {
  type: typeof ProfileActionTypes.GET_PROFILE_SUCCESS;
  payload: ProfileState;
};
export type UpdateProfileAction = {
  type: typeof ProfileActionTypes.UPDATE_PROFILE;
  payload: ProfileState;
};
export type UpdateProfileSuccessAction = {
  type: typeof ProfileActionTypes.UPDATE_PROFILE_SUCCESS;
  payload: ProfileState;
};

export type ProfileAction =
  | GetProfileAction
  | GetProfileSuccessAction
  | UpdateProfileAction
  | UpdateProfileSuccessAction
  | FailureActionType;

export function getProfile(): GetProfileAction {
  return { type: ProfileActionTypes.GET_PROFILE };
}

export function getProfileSuccess(
  payload: ProfileState
): GetProfileSuccessAction {
  return { type: ProfileActionTypes.GET_PROFILE_SUCCESS, payload };
}

export function updateProfile(payload: ProfileState): UpdateProfileAction {
  return { type: ProfileActionTypes.UPDATE_PROFILE, payload };
}

export function updateProfileSuccess(
  payload: ProfileState
): UpdateProfileSuccessAction {
  return { type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload };
}
