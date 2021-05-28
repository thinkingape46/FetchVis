import React from "react";
import Page from "../components/Page";

// COMPONENT IMPORTS
import HeaderGuest from "../components/HeaderGuest";
import Footer from "../components/Footer";

const redirect_uri = process.env.REDIRECTURI;

function Login(props) {
  const oauthUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.CLIENTID}&response_type=code&redirect_uri=${redirect_uri}&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  return (
    <Page title={"Connect to Strava"}>
      <HeaderGuest />
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
