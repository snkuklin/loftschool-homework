import { createSelector } from "reselect";
import { RootState } from "../../../store/reducer";

export const getAuth = createSelector(
  (state: RootState) => state.auth,
  auth => auth
);

export const getIsLoggedIn = createSelector(
  getAuth,
  ({ isLoggedIn }) => isLoggedIn
);

export const getIsLoading = createSelector(
  getAuth,
  ({ isLoading }) => isLoading
);
