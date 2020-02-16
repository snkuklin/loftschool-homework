import { createSelector } from "reselect";
import { LoginState } from "./reducer";

export interface globalState {
  loginReducer: LoginState;
}

export const getIsLoggedIn = createSelector(
  (state: globalState) => state.loginReducer.isLoggedIn,
  isLoggedIn => isLoggedIn
);
