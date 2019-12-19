import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

import reducers from "./componenets/reducer/reducers";

const middlewares = [
    thunk,
    logger
];

const initialState = {};

const HighchartsStore = createStore(reducers, initialState, applyMiddleware(...middlewares));

export default HighchartsStore;