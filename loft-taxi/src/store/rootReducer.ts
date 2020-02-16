import { combineReducers } from "redux";
import authReducer from "../modules/signIn";
import { AuthState } from "../modules/signIn/reducer";

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
