import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { loginMiddleware } from "../modules/signIn";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loginMiddleware))
);

export default store;
