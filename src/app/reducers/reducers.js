import { combineReducers } from "redux";
import stockReducer from "./stocks-reducers"; // export default don't need curly brackets

// The combineReducer knows to look inside the initialState variable inside stocks-reducer.js
export default combineReducers({
  stockReducer,
});
