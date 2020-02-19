import { AuthState, AuthActionType } from "./types";
import { FAILURE_ACTION } from "../../../store/constants";
import * as AuthActions from "./constants";

const initialState: AuthState = {
  error: "",
  isLoading: false,
  isLoggedIn: false
};

const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case AuthActions.CHECK_TOKEN:
      let hasToken = !!localStorage.getItem("token");

      if (hasToken) {
        return { ...state, isLoggedIn: true };
      } else {
        return { ...state, isLoggedIn: false };
      }
    case AuthActions.REGISTRATION:
    case AuthActions.LOGIN:
      return { ...state, isLoading: true };
    case AuthActions.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token || "");
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case AuthActions.LOGOUT:
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
