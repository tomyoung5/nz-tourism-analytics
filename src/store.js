import { applyMiddleware, createStore, compose } from "redux";
import {responsiveStoreEnhancer} from 'redux-responsive';
import thunk from "redux-thunk";
import reducer from "./reducers";

//redux devtools
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

//compose enhancers
const enhancers = composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(thunk),
);

export default createStore(reducer, enhancers);