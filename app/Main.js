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
  };

  function reducer(state, action) {
    switch (action.type) {
      case "flashMessage":
        return {
          flashMessages: state.flashMessages.concat(action.value),
          startDate: state.startDate,
          endDate: state.endDate,
          startEpoch: state.startEpoch,
          endEpoch: state.endEpoch,
          info: state.info,
          infoStyle: state.infoStyle,
        };
      case "changeStartDate":
        return {
          flashMessages: state.flashMessages,
          startDate: action.value,
          endDate: state.endDate,
          startEpoch: state.startEpoch,
          endEpoch: state.endEpoch,
          info: state.info,
          infoStyle: state.infoStyle,
        };
      case "changeEndDate": {
        return {
          flashMessages: state.flashMessages,
          startDate: state.startDate,
          endDate: action.value,
          startEpoch: state.startEpoch,
          endEpoch: state.endEpoch,
          info: state.info,
          infoStyle: state.infoStyle,
        };
      }
      case "changeStartEpoch":
        return {
          flashMessages: state.flashMessages,
          startDate: state.startDate,
          endDate: state.endDate,
          startEpoch: action.value,
          endEpoch: state.endEpoch,
          info: state.info,
          infoStyle: state.infoStyle,
        };
      case "changeEndEpoch":
        return {
          flashMessages: state.flashMessages,
          startDate: state.startDate,
          endDate: state.endDate,
          startEpoch: state.startEpoch,
          endEpoch: action.value,
          info: state.info,
          infoStyle: state.infoStyle,
        };
      case "changeInfo":
        return {
          flashMessages: state.flashMessages,
          startDate: state.startDate,
          endDate: state.endDate,
          startEpoch: state.startEpoch,
          endEpoch: state.endEpoch,
          info: action.value,
          infoStyle: state.infoStyle,
        };
      case "changeInfoStyle":
        return {
          flashMessages: state.flashMessages,
          startDate: state.startDate,
          endDate: state.endDate,
          startEpoch: state.startEpoch,
          endEpoch: state.endEpoch,
          info: state.info,
          infoStyle: action.value,
        };
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
