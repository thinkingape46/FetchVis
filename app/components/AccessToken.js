import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

/* Import Context */
import DispatchContext from "../context/DipatchContext";
import StateContext from "../context/StateContext";

function AccessToken(props) {
  const appDispatch = useContext(DispatchContext);
  const AppState = useContext(StateContext);

  const response = window.location.href.split("?")[1].split("&");

  const parameters = {};

  for (let i = 0; i < response.length; i++) {
    switch (response[i].split("=")[0]) {
      case "state":
        break;

      case "code":
        parameters["authorizationCode"] = response[i].split("=")[1];
        break;

      case "scope":
        parameters["scope"] = response[i].split("=")[1];
        break;
    }
  }
  appDispatch({
    type: "scopeReceived",
    value: parameters["scope"],
  });
  appDispatch({
    type: "authorizationCode",
    value: parameters["authorizationCode"],
  });

  if (
    parameters["authorizationCode"] &&
    parameters["scope"] == AppState.scopeRequest
  ) {
    props.history.push("app");
    return <></>;
  } else {
    props.history.push("");
    return <></>;
  }
}

export default withRouter(AccessToken);
