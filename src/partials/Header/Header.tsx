import React from "react";
import Logo from "../../components/Logo/Logo";
import "./header.scss";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo-container">
        <Logo className="app-header__logo-container__logo" />
      </div>
      <div>Dark</div>
    </div>
  );
};

export default Header;
