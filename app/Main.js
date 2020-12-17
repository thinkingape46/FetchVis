import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import { useImmerReducer } from "use-immer";
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

// Import scripts
import DateCalc from "./scripts/dateCalc";
let date = new DateCalc();

function Main() {
  const initialState = {
    flashMessages: [],
    startDate: date.currentDate(),
    endDate: date.currentDate(),
    startEpoch: Date.now(),
    endEpoch: Date.now(),
    info: "select the date range",
    infoStyle: "",
    authorizationCode: "",
    scopeRequest: "read,activity:read,activity:read_all,profile:read_all",
    scopeReceived: "",
  };

  function reducer(draft, action) {
    switch (action.type) {
      case "flashMessage":
        draft.flashMessages.push(action.value);
        break;
      case "changeStartDate":
        draft.startDate = action.value;
        break;
      case "changeEndDate":
        draft.endDate = action.value;
        break;
      case "changeStartEpoch":
        draft.startEpoch = action.value;
        break;
      case "changeEndEpoch":
        draft.endEpoch = action.value;
        break;
      case "changeInfo":
        draft.info = action.value;
        break;
      case "changeInfoStyle":
        draft.infoStyle = action.value;
        break;
      case "scopeReceived":
        draft.scopeReceived = action.value;
        break;
      case "authorizationCode":
        draft.authorizationCode = action.value;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState);

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
