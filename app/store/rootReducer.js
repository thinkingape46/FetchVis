import { createStore, combineReducers } from "redux";

// REDUCERS IMPORT
import authReducer from "./authReducer";

const combinedReducers = combineReducers({ authReducer });

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
