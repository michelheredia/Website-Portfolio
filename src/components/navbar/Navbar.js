import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbarr = ({ isScrolling }) => {

  const [active, setActive] = useState("null");

  const handleToggle = () => {
    setActive(!active);
  };

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const toTheButoom = () => {
    window.scrollTo({ top: 10000, left: 0, behavior: "smooth" });
    handleToggle();
  };

  return (
   <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        MH
      </div>
      <ul className={active ? "ul-items" : "ul-items ul-items_visible"}>
        <li >
          <Link onClick={handleToggle} to="cover" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li >
         <Link onClick={handleToggle} to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
        </li>
        <li >
          <Link onClick={handleToggle} to="slider" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
        </li>
        <li >
          <Link onClick={handleToggle} to="info" spy={true} smooth={true} offset={-80} duration={500}>Info</Link>
        </li>
        <li onClick={toTheButoom} >
          <a >Contact</a> {/*add href */}
        </li>
      </ul>
      <button className="btn-menu" onClick={handleToggle}>
        <i className="fa fa-bars"> </i>
      </button>
    </nav>
      
  );
};

export default Navbarr;
