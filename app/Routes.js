import React from "react";
import { Route } from "react-router-dom";

// ROUTE IMPORTS
import Login from "./pages/Login";
import AccessToken from "./pages/AccessToken";
import App from "./pages/App";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login}></Route>
      <Route path="/accesstoken" component={AccessToken}></Route>
      <Route path="/app" exact component={App}></Route>
    </>
  );
};

export default Routes;
