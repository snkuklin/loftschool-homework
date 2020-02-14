import { createSelector } from "reselect";
import { LoginState } from "./reducer";

export const getIsLoggedIn = createSelector(
  (state: LoginState) => state.isLoggedIn,
  isLoggedIn => isLoggedIn
);
