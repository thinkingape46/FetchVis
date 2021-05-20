import React from "react";
import { Route } from "react-router-dom";

// ROUTE IMPORTS
import Login from "./components/Login";

const Routes = () => {
  return <Route path="/" component={Login}></Route>;
};

export default Routes;
