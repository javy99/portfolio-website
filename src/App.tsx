import "./App.css";
import About from "./components/About Section/About";
import Home from "./components/Home Section/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills Section/Skills";
import Projects from "./components/Projects Section/Projects";
import Contact from "./components/Contact Section/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
