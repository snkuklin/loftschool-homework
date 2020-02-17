import { BASE_URL } from "../constants";
import { Action, Dispatch, MiddlewareAPI } from "redux";
import { LoginAction, loginSuccess, loginFailure } from "./actions";

const LOGIN_PATH = "/auth";

export const loginMiddleware = (store: MiddlewareAPI) => (
  next: Dispatch<Action>
) => (action: LoginAction) => {
  if (action.type === "LOGIN") {
    fetch(`${BASE_URL}${LOGIN_PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.input)
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          return store.dispatch(loginFailure(data));
        }
        return store.dispatch(loginSuccess(data));
      })
      .catch(error => store.dispatch(loginFailure(error)));
  }
  return next(action);
};
