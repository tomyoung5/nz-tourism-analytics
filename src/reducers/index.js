import { combineReducers } from "redux";
import { responsiveStateReducer as browser } from 'redux-responsive';
import { responsiveDrawer } from 'material-ui-responsive-drawer';

import LeftMenuReducer from "./LeftMenuReducer";


export default combineReducers({
    leftMenu: LeftMenuReducer,
    browser,
    responsiveDrawer
});