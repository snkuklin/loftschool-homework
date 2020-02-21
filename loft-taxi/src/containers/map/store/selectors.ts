import { createSelector } from "reselect";
import { RootState } from "../../../store/types";

export const getAddresses = createSelector(
  (state: RootState) => state.addresses,
  addresses => addresses
);

export const getCurrentRouteState = createSelector(
  (state: RootState) => state.currentRoute,
  currentRoute => currentRoute
);

export const getCurrentRoute = createSelector(
  getCurrentRouteState,
  ({ route }) => route
);

export const getIsLoading = createSelector(
  getCurrentRouteState,
  ({ isLoading }) => isLoading
);
