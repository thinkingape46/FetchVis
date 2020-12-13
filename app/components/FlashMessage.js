import React, { useEffect } from "react";

function FlashMessages(props) {
  return (
    <div className="flash-button">
      {props.flashMessages.map((msg, index) => {
        return (
          <p
            className="flash-button__message text text--center text--normal"
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
