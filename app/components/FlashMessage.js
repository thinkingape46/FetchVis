import React, { useContext, useEffect } from "react";
import StateContext from "../context/StateContext";

function FlashMessages(props) {
  const appState = useContext(StateContext);
  return (
    <div className="flash-button">
      {appState.flashMessages.map((msg, index) => {
        return (
          <p
            className="flash-button__message box text text--center text--normal"
            key={index}
          >
            {msg}
          </p>
        );
      })}
    </div>
  );
}

export default FlashMessages;
