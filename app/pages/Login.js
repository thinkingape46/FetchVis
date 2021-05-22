import React from "react";
import Page from "../components/Page";

// COMPONENT IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=http://localhost:3006/accesstoken&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

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
