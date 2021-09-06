import React from "react";

function Header() {
  return (
    <>
      <header className="header header-guest">
        <div className="header__logo">
          <img
            className="header__logo__image"
            src="images/howfar_logo.svg"
            alt=""
          />
          <p className="header__logo__text text text--medium">FetchVis</p>
        </div>
      </header>
    </>
  );
}

export default Header;
