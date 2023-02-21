import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/weather.jpeg";
import IMG2 from "../../assets/restaurant.jpeg";
import IMG3 from "../../assets/grocerystore.jpeg";
import IMG4 from "../../assets/calculator.jpeg";
import IMG5 from "../../assets/notes.png";

const Projects = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <h5>My Recent Work</h5>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" style={{ width: 260, height: 190 }} />
          </div>
          <h3>React Note App</h3>
          <a
            href="https://aletilalitha.github.io/React-notes/"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Weather Search App</h3>
          <a
            href="https://aletilalitha.github.io/Weather-App/"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Restaurant App</h3>
          <a
            href="https://aletilalitha.github.io/Restaurant-App/"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Online Grocery Store App</h3>
          <a
            href="https://aletilalitha.github.io/Foodigo/"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Calculator App</h3>
          <a
            href="https://aletilalitha.github.io/Calculator-App/"
            className="btn"
            target="blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
