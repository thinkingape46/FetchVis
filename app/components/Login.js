import React from "react";
import Page from "./Page";

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3006/&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  return (
    <Page title={"Connect to Strava"}>
      <div
        className="connect-strava box text text--normal"
        onClick={() => window.location.replace(oauthUrl)}
      >
        Connect with Strava
      </div>
    </Page>
  );
}

export default Login;
