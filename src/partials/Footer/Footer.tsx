import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="app-footer">
      <p className="app-footer__desc">
        Created by{" "}
        <a
          className="app-footer__link"
          target="__blank"
          href="https://github.com/1kemuefuna"
        >
          Michael Ikemuefuna Ukandu
        </a>
      </p>
    </div>
  );
};

export default Footer;
