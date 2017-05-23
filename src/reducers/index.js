import { combineReducers } from "redux";
import LeftMenuReducer from "./LeftMenuReducer";

export default combineReducers({
    leftMenu: LeftMenuReducer,
});