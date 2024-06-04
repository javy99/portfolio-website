import "./App.css";
import About from "./components/About Section/About";
import Home from "./components/Home Section/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills Section/Skills";
import Projects from "./components/Projects Section/Projects";
import Contact from "./components/Contact Section/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience Section/WorkExperience";
import Education from "./components/Education Section/Education";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <WorkExperience />
      <Education theme={theme} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
