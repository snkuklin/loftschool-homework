import { createSelector } from "reselect";
import { RootState } from "../../store/rootReducer";

export const getIsLoggedIn = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn
);
