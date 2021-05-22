import React from "react";

// COMPONENT IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "../components/Page";
import Distance from "../components/Distance";

function Login() {
  return (
    <Page title={"App"}>
      <Header />
      <Distance />
      <Footer />
    </Page>
  );
}

export default Login;
