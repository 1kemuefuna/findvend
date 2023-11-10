import React from "react";
import Logo from "../../components/Logo/Logo";
import "./header.scss";
import ThemeToggler from "../../components/ThemeToggler";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo-container">
        <Link to={"/"}>
          <Logo className="app-header__logo-container__logo" />
        </Link>
      </div>
      <div>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
