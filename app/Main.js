import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./styles/main.scss";

// Import components
import Header from "./components/Header";
import Distance from "./components/Distance";
import Footer from "./components/Footer";
import Login from "./components/Login";

// REDUX STORE IMPORT
import store from "./store";

// Import scripts
import DateCalc from "./scripts/dateCalc";
let date = new DateCalc();

function Main() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => store.loggedIn);
  console.log(store.getState());
  // useEffect(() => {
  //   dispatch({ type: "login" });
  // }, []);

  return (
    <>
      <Header />
      {loggedIn ? <Distance /> : <Login />}
      <Footer />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
