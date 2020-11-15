import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

export default store;