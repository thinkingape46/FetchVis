import { createStore, combineReducers } from "redux";

// REDUCERS IMPORT
import authReducer from "./authReducer";
import dateRangeReducer from "./dateRangeReducer";
import userProfileReducer from "./userProfileReducer";
import stravaTokenReducer from "./stravaTokensReducer";
import activitiesReducer from "./activitiesReducer";

const combinedReducers = combineReducers({
  authReducer,
  dateRangeReducer,
  userProfileReducer,
  stravaTokenReducer,
  activitiesReducer,
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
