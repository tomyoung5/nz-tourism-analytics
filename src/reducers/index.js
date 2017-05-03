import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import LeftMenuReducer from "./LeftMenuReducer";
import CollectionReducer from "./CollectionReducer";
import ModalReducer from "./ModalReducer";

export default combineReducers({
	modalReducer: ModalReducer,
	collectionReducer: CollectionReducer,
    leftMenu: LeftMenuReducer,
    form: formReducer,
});