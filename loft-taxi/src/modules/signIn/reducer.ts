import { LoginAction } from "./actions";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export interface AuthState {
  error?: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  error: "",
  isLoading: false,
  isLoggedIn: false
};

const authReducer = (state = initialState, action: LoginAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token || "");
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_FAILURE:
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
