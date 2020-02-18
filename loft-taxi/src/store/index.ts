import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { authMiddleware } from "../modules/auth";
import { profileMiddleware } from "../modules/profile";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(authMiddleware, profileMiddleware))
);

export default store;
