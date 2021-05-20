import { createStore } from "redux";

const initialState = {
  flashMessages: [],
  startDate: Date.now(),
  endDate: Date.now(),
  startEpoch: Date.now(),
  endEpoch: Date.now(),
  info: "select the date range",
  infoStyle: "",
  authorizationCode: "",
  scopeRequest: "read,activity:read,activity:read_all,profile:read_all",
  scopeReceived: "",
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      const newState = JSON.parse(JSON.stringify(state));
      Object.keys(newState).forEach((k) => {
        if (k === "loggedIn") {
          newState[k] = true;
        }
      });
      return newState;
    }
    case "logout": {
      const newState = JSON.parse(JSON.stringify(state));
      Object.keys(newState).forEach((k) => {
        if (k === "loggedIn") {
          newState[k] = false;
        }
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
