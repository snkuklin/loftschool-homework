import { SystemProfileState } from "./types";
import { ProfileAction, ProfileActionTypes } from "./actions";

export const initialState: SystemProfileState = {
  isLoading: false,
  profile: {
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: ""
  }
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): SystemProfileState => {
  switch (action.type) {
    case ProfileActionTypes.GET_PROFILE_SUCCESS:
    case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case ProfileActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        isLoading: true
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default profileReducer;
