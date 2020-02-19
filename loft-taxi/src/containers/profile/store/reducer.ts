import { SystemProfileState, ProfileActionType } from "./actions";
import * as ProfileActions from "./constants";

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
  action: ProfileActionType
): SystemProfileState => {
  switch (action.type) {
    case ProfileActions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case ProfileActions.UPDATE_PROFILE:
      return {
        ...state,
        isLoading: true
      };
    case ProfileActions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.data,
        isLoading: false
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default profileReducer;
