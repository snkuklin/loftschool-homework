import { createSelector } from "reselect";
import { RootState } from "../../../store/types";

export const getSystemProfileState = createSelector(
  (state: RootState) => state.profile,
  profile => profile
);

export const getProfileData = createSelector(
  getSystemProfileState,
  ({ profile }) => profile
);

export const getIsLoading = createSelector(
  getSystemProfileState,
  ({ isLoading }) => isLoading
);

export const getProfileFilled = createSelector(
  getProfileData,
  profile =>
    profile &&
    profile.cardName &&
    profile.cardNumber &&
    profile.expiryDate &&
    profile.cvc
);
