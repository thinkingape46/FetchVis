import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AccessToken() {
  const response = window.location.href.split("?")[1].split("&");
  console.log(response);

  const parameters = {};

  for (let i = 0; i < response.length; i++) {
    switch (response[i].split("=")[0]) {
      case "state":
        break;

      case "code":
        parameters["code"] = response[i].split("=")[1];

      case "scope":
        parameters["scope"] = response[i].split("=")[1].split(",");
    }
  }
  console.log(parameters);

  if (parameters["code"] && parameters["scope"]) {
    return (
      <>
        <p className="text text--center">Success</p>
      </>
    );
  } else {
    return (
      <>
        <p className="text text--center">There was an error</p>
      </>
    );
  }
}

export default AccessToken;
