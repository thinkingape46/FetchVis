import React, { useEffect } from "react";

// COMPONENTS IMPORT
import UserProfile from "./UserProfile";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logo__image"
            src="images/howfar_logo.svg"
            alt=""
          />
          <p className="header__logo__text text text--medium">How Far</p>
        </div>
        <UserProfile />
      </header>
    </>
  );
}

export default Header;
