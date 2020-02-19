import { combineReducers } from "redux";
import authReducer from "../containers/auth/store";
import profileReducer from "../containers/profile/store";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;
