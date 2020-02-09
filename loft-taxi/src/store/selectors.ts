import { createSelector } from "reselect";

const isLoggedInSelector = (state: { isLoggedIn: boolean }) => state.isLoggedIn;

export const getIsLoggedIn = createSelector(
  isLoggedInSelector,
  isLoggedIn => isLoggedIn
);
