import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href=" https://linkedin.com/in/lalitha-aleti-855259232">
        <BsLinkedin />
      </a>
      <a href="https://github.com/aletilalitha">
        <FaGithub />
      </a>
      <a href="https://codepen.io/lalithaaleti">
        <FiCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
