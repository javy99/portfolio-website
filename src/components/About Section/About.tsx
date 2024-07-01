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
            I am a success-driven and determined Frontend Developer specializing
            in React.js with TypeScript. With extensive experience in building
            accessible, component-based web pages and systems using HTML, SCSS,
            JavaScript, and PHP, I excel in delivering quality results in
            dynamic work environments.
            <br /> <br />
            I collaborate effectively with diverse teams and am passionate about
            continuous learning, always eager to explore new technologies to
            enhance my skills and become a better developer each day.
            <br /> <br />
            Result-oriented and committed to excellence, I am ready to tackle
            new challenges and make a significant impact in the IT industry.
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
