import { createSelector } from "reselect";
import { RootState } from "../../../store/reducer";

export const getProfileData = createSelector(
  (state: RootState) => state.profile,
  profile => profile
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
