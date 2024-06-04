import { useEffect, useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  // code to toggle on and off the navbar at small width.
  const [active, setActive] = useState("navBar");
  const [activeHeader, setActiveHeader] = useState("header");
  const [theme, setTheme] = useState("light");

  // this will bring in the navbar from the top
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  // this will remove in the navbar from the top
  const closeNavBar = () => {
    setActive("navBar");
  };

  // code statement to add a background color to the header.
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBg);
    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
            <a href="#work" className="navLink">
              <span className="headerNumber">3.</span>Work Experience
            </a>
          </li>
          <li className="navItem">
            <a href="#education" className="navLink">
              <span className="headerNumber">4.</span>Education
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">5.</span>Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">6.</span>Contact
            </a>
          </li>
          <button className="btn">
            <a
              href="Javlonbek_Kosimov_CV.pdf"
              download="Javlonbek_Kosimov_CV.pdf"
            >
              Resume
            </a>
          </button>
        </ul>

        <div className="closeNavBar" onClick={closeNavBar}>
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div className="rightMenu">
        <div className="themeToggle" onClick={toggleTheme}>
          {theme === "light" ? (
            <div className="iconCircle">
              <FaMoon className="icon" />
            </div>
          ) : (
            <FaSun className="icon" />
          )}
        </div>
        <div className="toggleNavBar" onClick={showNavBar}>
          <TbGridDots className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
