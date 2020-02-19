import { ProfileState, ProfileActionType } from "./actions";
import * as ProfileActions from "./constants";

export const initialState: ProfileState = {
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  cardName: ""
};

const profileReducer = (
  state = initialState,
  action: ProfileActionType
): ProfileState => {
  switch (action.type) {
    case ProfileActions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
        cardName: action.payload.cardName
      };
    case ProfileActions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        cardNumber: action.data.cardNumber,
        expiryDate: action.data.expiryDate,
        cvc: action.data.cvc,
        cardName: action.data.cardName
      };
    default:
      return state;
  }
};

export default profileReducer;
