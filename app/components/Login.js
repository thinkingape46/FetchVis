import React, { useEffect, useContext } from "react";
import Axios from "axios";
import Page from "./Page";
import DispatchContext from "../context/DipatchContext";

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    appDispatch({
      type: "flashMessage",
      value: "Welcome! Please connect to Strava",
    });
  }, []);

  return (
    <Page title={"Connect to Strava"}>
      <a href={oauthUrl} className="connect-strava box text text--normal">
        Connect with Strava
      </a>
    </Page>
  );
}

export default Login;
