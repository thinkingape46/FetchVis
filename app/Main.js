import React, { useState } from "react";
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
import FlashMessage from "./components/FlashMessage";
import ExampleContext from "./ExampleContext";

function Main() {
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <ExampleContext.Provider value={addFlashMessage}>
      <BrowserRouter>
        <Header />
        <FlashMessage flashMessages={flashMessages} />
        <Switch>
          <Route path="/" exact>
            <Login addFlashMessage={addFlashMessage} />
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
    </ExampleContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
