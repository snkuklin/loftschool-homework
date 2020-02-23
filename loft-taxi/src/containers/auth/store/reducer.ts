import { AuthState } from "./types";
import { AuthAction, AuthActionTypes } from "./actions";
import { FAILURE_ACTION } from "../../../store/constants";

const initialState: AuthState = {
  error: "",
  isLoading: false,
  isLoggedIn: false
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.CHECK_TOKEN:
      let hasToken = !!localStorage.getItem("token");

      if (hasToken) {
        return { ...state, isLoggedIn: true };
      } else {
        return { ...state, isLoggedIn: false };
      }
    case AuthActionTypes.REGISTRATION:
    case AuthActionTypes.LOGIN:
      return { ...state, isLoading: true };
    case AuthActionTypes.REGISTRATION_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token || "");
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case AuthActionTypes.LOGOUT:
      localStorage.setItem("token", "");
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: ""
      };
    case FAILURE_ACTION:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default authReducer;
