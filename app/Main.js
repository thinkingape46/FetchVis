import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

// Context imports
import StateContext from "./context/StateContext";
import DispatchContext from "./context/DipatchContext";

// Import components
import Header from "./components/Header";
import DateRange from "./components/DateRange";
import Distance from "./components/Distance";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AccessToken from "./components/AccessToken";
import FlashMessage from "./components/FlashMessage";

function Main() {
  const initialState = {
    flashMessages: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "flashMessage":
        return { flashMessages: state.flashMessages.concat(action.value) };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <FlashMessage />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/app" exact>
              <DateRange />
              <Distance />
            </Route>
            <Route path="/exchange_token">
              <AccessToken />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
