import { combineReducers } from "redux";
import authReducer from "../containers/auth/store";
import { AuthState } from "../containers/auth/store/reducer";
import profileReducer, {
  SystemProfileState
} from "../containers/profile/store";

export interface RootState {
  auth: AuthState;
  profile: SystemProfileState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;
