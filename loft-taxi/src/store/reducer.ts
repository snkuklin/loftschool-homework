import { combineReducers } from "redux";
import authReducer from "../containers/auth/store";
import profileReducer from "../containers/profile/store";
import { addressesReducer, routeReducer } from "../containers/map/store";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  addresses: addressesReducer,
  currentRoute: routeReducer
});

export default rootReducer;
