import React, { useEffect } from "react";
import Axios from "axios";

function Login() {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;
  return (
    <a href={oauthUrl} className="connect-strava box text text--normal">
      Connect with Strava
    </a>
  );
}

export default Login;
