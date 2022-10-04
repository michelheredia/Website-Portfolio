import React from "react";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbarr = ({ isScrolling }) => {

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const toTheButoom = () => {
    window.scrollTo({ top: 10000, left: 0, behavior: "smooth" });
  };

  return (
   <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        MH
      </div>
      <ul className="ul-items">
        <li >
          <Link to="cover" spy={true} smooth={true} offset={0} duration={500}>Cover</Link>
        </li>
        <li >
         <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
        </li>
        <li >
          <Link to="slider" spy={true} smooth={true} offset={-80} duration={500}>Slider</Link>
        </li>
        <li >
          <Link to="info" spy={true} smooth={true} offset={-80} duration={500}>Info</Link>
        </li>
        <li onClick={toTheButoom}>
          <a >Footer</a>
        </li>
      </ul>
      <span className="btn-menu">
        <i className="fa fa-bars"> </i>
      </span>
    </nav>
      
  );
};

export default Navbarr;
