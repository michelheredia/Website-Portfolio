import React from "react";
import "./Slider.css";
import imgTateti from "./../../media/imgTateti.jpg"
import imgCrud from "./../../media/imgCrud.jpg"
import imgWebsite from "./../../media/imgWebsite.jpg"

const slidesInfo = [
  {
    src: imgTateti,
    alt: "Project 1",
    desc: "Ta-Te-Ti",
    href: "https://michelheredia.github.io/ta-te-ti/",
  },
  {
    src: imgCrud,
    alt: "Project 2",
    desc: "CRUD",
    href: "https://github.com/michelheredia/crud-react",
  },
  {
    src: imgWebsite,
    alt: "Project 3",
    desc: "Portfolio",
    href: "https://michelheredia.github.io/Website-Portfolio/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.href}>
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
