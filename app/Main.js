import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/main.scss";

// ROUTE IMPORTS
import Routes from "./Routes";

// REDUX STORE IMPORT
import store from "./store/rootReducer";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Switch>{Routes()}</Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
