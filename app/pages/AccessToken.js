import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// ACTIONS IMPORT
import { LOGIN, ADDSCOPE, AUTHORIZATIONCODE } from "../store/authReducer";

function AccessToken(props) {
  const response = window.location.href.split("?")[1].split("&");

  // REDUX HOOKS START
  const dispatch = useDispatch();
  // REDUX HOOKS END

  const parameters = {};

  for (let i = 0; i < response.length; i++) {
    switch (response[i].split("=")[0]) {
      case "state":
        break;

      case "code":
        parameters["authorizationCode"] = response[i].split("=")[1];
        localStorage.setItem("authorizationCode", response[i].split("=")[1]);
        break;

      case "scope":
        parameters["scope"] = response[i].split("=")[1];
        localStorage.setItem("scopeReceived", response[i].split("=")[1]);
        break;
    }
  }

  useEffect(() => {
    if (
      parameters["authorizationCode"] != "" &&
      parameters["scope"] ===
        "read,activity:read,activity:read_all,profile:read_all"
    ) {
      dispatch({ type: LOGIN });
      dispatch({
        type: ADDSCOPE,
        scopeReceived: parameters["scope"],
      });
      dispatch({
        type: AUTHORIZATIONCODE,
        authorizationCode: parameters["authorizationCode"],
      });
      props.history.push("/app");
    } else {
      props.history.push("/");
    }
  }, []);

  return (
    <>
      <p>Please Wait..</p>
    </>
  );
}

export default AccessToken;
