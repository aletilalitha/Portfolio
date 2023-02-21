import React from "react";
import "./About.css";
import ME from "../../assets/Me1.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiGitMerge } from "react-icons/di";

import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h5>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <h2>Get To Know Me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall
            product.Passionate about learning new technologies,bringing ideas to
            life,and working with dedicated teams to build efficient and robust
            applications suited to user needs.
          </p>
          <h2>Skills:</h2>
          <div className="about__cards">
            <article className="about__card">
              <FaHtml5 className="about__icon" />
              <h5>HTML5</h5>
            </article>
            <article className="about__card">
              <FaCss3Alt className="about__icon" />
              <h5>CSS3</h5>
            </article>
            <article className="about__card">
              <TbBrandJavascript className="about__icon" />
              <h5>JavaScript</h5>
            </article>
            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>React</h5>
            </article>
            <article className="about__card">
              <DiNodejs className="about__icon" />
              <h5>Node js</h5>
            </article>
            <article className="about__card">
              <DiGitMerge className="about__icon" />
              <h5>Git</h5>
            </article>
            <article className="about__card">
              <BsGithub className="about__icon" />
              <h5>GitHub</h5>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
