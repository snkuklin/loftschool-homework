import { Action, Dispatch, MiddlewareAPI } from "redux";
import { ProfileActionType } from "./types";
import { getProfileSuccess, updateProfileSuccess } from "./actions";
import { onRequestFailure } from "../../../store/actions";
import { BASE_URL } from "../../../store/constants";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILE_PATH,
  UPDATE_PROFILE_PATH
} from "./constants";

export const profileMiddleware = (store: MiddlewareAPI) => (
  next: Dispatch<Action>
) => (action: ProfileActionType) => {
  let token = localStorage.getItem("token") || "";

  if (action.type === GET_PROFILE) {
    fetch(`${BASE_URL}${GET_PROFILE_PATH}?token=${encodeURIComponent(token)}`)
      .then(response => response.json())
      .then(data => store.dispatch(getProfileSuccess(data)))
      .catch(error => store.dispatch(onRequestFailure(error)));
  } else if (action.type === UPDATE_PROFILE) {
    fetch(`${BASE_URL}${UPDATE_PROFILE_PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...action.input, token: token })
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          return store.dispatch(onRequestFailure(data));
        }
        return store.dispatch(updateProfileSuccess(action.input));
      })
      .catch(error => store.dispatch(onRequestFailure(error)));
  }
  return next(action);
};
