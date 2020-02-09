import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";
import { createAction } from "redux-actions";
import { combineReducers } from "redux";

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
}

const defaultAuthState: AuthState = {
  isLoggedIn: false,
  isLoading: false
};

export const actions = {
  login: createAction(LOGIN),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginFailure: createAction(LOGIN_FAILURE)
};

const authReducer = (state = defaultAuthState, action: { type: any }) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      window.localStorage.setItem("token", JSON.stringify(true));
      return { ...state, isLoading: false, isLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
