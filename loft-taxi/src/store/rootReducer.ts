import { combineReducers } from "redux";
import authReducer from "../modules/auth";
import { AuthState } from "../modules/auth/reducer";

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
