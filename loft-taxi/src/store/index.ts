import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { authMiddleware } from "../containers/auth/store";
import { profileMiddleware } from "../containers/profile/store";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(authMiddleware, profileMiddleware))
);

export default store;
