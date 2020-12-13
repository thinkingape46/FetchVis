import React, { useEffect } from "react";
import Axios from "axios";
import Page from "./Page";

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  useEffect(() => {
    props.addFlashMessage("Welcome! Plese login to Strava");
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
