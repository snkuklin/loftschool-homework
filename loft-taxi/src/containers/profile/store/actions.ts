import * as ProfileActions from "./constants";
import { ProfileActionType, ProfileState } from "./types";

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
