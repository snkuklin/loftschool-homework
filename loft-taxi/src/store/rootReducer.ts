import { combineReducers } from "redux";
import authReducer from "../modules/auth";
import { AuthState } from "../modules/auth/reducer";
import profileReducer, { ProfileState } from "../modules/profile";

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;
