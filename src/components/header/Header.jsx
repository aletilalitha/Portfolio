import React from "react";
import "./Header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hi , I'm </h5>
        <h1>Lalitha Aleti</h1>
        <h5 className="Designation"> React Developer</h5>

        <HeaderSocials />
        <div className="description">
          <p className="text-light">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
          </p>
          <CTA />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
