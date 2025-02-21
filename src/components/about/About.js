import React from "react";
import "./About.css";
import imgCv from "./../../media/imgCv2.jpg"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          Soy estudiante de Ingeniería en
          Sistemas. Interés constante por
          aprender y desarrollar con nuevas
          tecnologías en IT. Trabajo en
          equipo, me gusta compartir e
          intercambiar conocimientos.
        </p>
      </div>
      <div className="about-img">
        <img
          src={imgCv}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
