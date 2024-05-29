import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // code to toggle on and off the navbar at small width.
  const [active, setActive] = useState("navBar");

  // this will bring in the navbar from the top
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  // this will remove in the navbar from the top
  const closeNavBar = () => {
    setActive("navBar");
  };

  // code statement to add a background color to the header.
  const [activeHeader, setActiveHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Javy.</a>
        </h1>
      </div>

      <div className={active}>
        <ul className="navLists" onClick={closeNavBar}>
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span>About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber">2.</span>Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3.</span>Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4.</span>Contact
            </a>
          </li>
          <button className="btn">
            <a href="Javlonbek's Resume.pdf" download="Javlonbek's Resume.pdf">
              Resume
            </a>
          </button>
        </ul>

        <div className="closeNavBar" onClick={closeNavBar}>   
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div className="toggleNavBar" onClick={showNavBar}>
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
