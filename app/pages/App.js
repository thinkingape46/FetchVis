import React from "react";

// COMPONENT IMPORTS
import Page from "../components/Page";
import Header from "../components/Header";
import DateRange from "../components/DateRange";
import Distance from "../components/Distance";
import Footer from "../components/Footer";

function Login() {
  return (
    <Page title={"App"}>
      <Header />
      <DateRange />
      <Distance />
      <Footer />
    </Page>
  );
}

export default Login;
