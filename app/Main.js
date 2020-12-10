import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

// My components
import Header from "./components/Header";
import DateRange from "./components/DateRange";
import Distance from "./components/Distance";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AccessToken from "./components/AccessToken";

function Main() {
  return (
    <BrowserRouter>
      <Header />
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
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
