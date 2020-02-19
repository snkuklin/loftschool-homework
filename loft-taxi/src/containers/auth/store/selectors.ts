import { createSelector } from "reselect";
import { RootState } from "../../../store/reducer";

export const getIsLoggedIn = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn
);
