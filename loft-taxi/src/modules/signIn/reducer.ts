import { combineReducers } from "redux";
import { LoginAction } from "./actions";

export interface LoginState {
  error?: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  error: "",
  isLoading: false,
  isLoggedIn: false
};

const loginReducer = (
  state = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token || "");
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case "LOGIN_FAILURE":
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

export default loginReducer;
