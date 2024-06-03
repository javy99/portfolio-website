import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import img from "../../assets/javy.png";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a success-driven, determined Frontend developer. I have
            experience using HTML SCSS JavaScript and PHP to build accessible
            component-based web pages and systems.
            <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team composition.
            <br />A passionate person willing to learn more technologies to
            become a better developer than i was yesterday. So determined and
            result oriented.
          </h4>

          <div className="aboutBtn">
            <a
              href="Javlonbek_Kosimov_CV.pdf"
              className="flex"
              download="Javlonbek_Kosimov_CV.pdf"
            >
              Download CV <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src={img} alt="Javlonbek Kosimov" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
