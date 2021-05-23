import { createStore, combineReducers } from "redux";

// REDUCERS IMPORT
import authReducer from "./authReducer";
import dateRangeReducer from "./dateRangeReducer";

const combinedReducers = combineReducers({ authReducer, dateRangeReducer });

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
