import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { loginMiddleware } from "../modules/signIn";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loginMiddleware))
);

export default store;
