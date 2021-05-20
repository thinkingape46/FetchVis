import React from "react";
import Page from "./Page";

// COMPONENT IMPORTS
import Header from "./Header";
import Footer from "./Footer";

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3006/&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  return (
    <Page title={"Connect to Strava"}>
      <Header />
      <div
        className="connect-strava box text text--normal"
        onClick={() => window.location.replace(oauthUrl)}
      >
        Connect with Strava
      </div>
      <Footer />
    </Page>
  );
}

export default Login;
