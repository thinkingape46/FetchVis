import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header logo">
        <Link className="header__link" to="/">
          <img className="logo__image" src="images/howfar_logo.svg" alt="" />
          <p className="logo__text text text--medium">How Far</p>
        </Link>
      </header>
    </>
  );
}

export default Header;
