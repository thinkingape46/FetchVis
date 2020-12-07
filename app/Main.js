import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";

// My components
import Header from "./components/Header";
import DateRange from "./components/DateRange";
import Distance from "./components/Distance";
import Footer from "./components/Footer";

function Main() {
  return (
    <>
      <Header />
      <DateRange />
      <Distance />
      <Footer />
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
