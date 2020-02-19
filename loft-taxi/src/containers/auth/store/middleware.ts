import { Action, Dispatch, MiddlewareAPI } from "redux";
import { BASE_URL } from "../../../store/constants";
import { LoginActionType, loginSuccess } from "./actions";
import { onRequestFailure } from "../../../store/actions";
import {
  LOGIN,
  LOGIN_PATH,
  REGISTRATION,
  REGISTRATION_PATH
} from "./constants";

export const authMiddleware = (store: MiddlewareAPI) => (
  next: Dispatch<Action>
) => (action: LoginActionType) => {
  if (action.type === LOGIN || action.type === REGISTRATION) {
    let PATH = action.type === LOGIN ? LOGIN_PATH : REGISTRATION_PATH;

    fetch(`${BASE_URL}${PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.input)
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          return store.dispatch(onRequestFailure(data));
        }
        return store.dispatch(loginSuccess(data));
      })
      .catch(error => store.dispatch(onRequestFailure(error)));
  }
  return next(action);
};
