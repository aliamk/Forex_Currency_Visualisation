import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import reducers from "../reducers/reducers";

// Place middlewares in an array
const middleWares = [thunk, logger];

// Set initial state of the store to an empty object
const initialState = {};

// Assign 'createStore' as a function to the HighchartsStore variable and pass the reducers (combined),
// the store's initial state and the function 'applyMiddleWares' with the middlewares array as parameters
const HighchartsStore = createStore(reducers, initialState, applyMiddleware(...middlewares));

export default HighchartsStore;
