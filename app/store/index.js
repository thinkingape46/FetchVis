import { createStore } from "redux";

const initialState = {
  count: 0,
};

const reducer = (initialState, action) => {
  return initialState;
};

const store = createStore(reducer);

export default store;
