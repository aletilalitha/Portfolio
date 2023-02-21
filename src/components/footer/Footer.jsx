import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#/" className="footer__logo">
        Aleti Lalitha
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <AiOutlineGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright 2023. Made by Lalitha Aleti</small>
      </div>
    </footer>
  );
};

export default Footer;
