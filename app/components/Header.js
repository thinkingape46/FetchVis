import React, { useEffect } from "react";

function Header() {
  return (
    <>
      <header className="header logo">
        <img className="logo__image" src="images/howfar_logo.svg" alt="" />
        <p className="logo__text text text--medium">How Far</p>
      </header>
    </>
  );
}

export default Header;
