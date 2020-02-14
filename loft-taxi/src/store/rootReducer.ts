import { combineReducers } from "redux";
import loginReducer from "../modules/signIn";

const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
