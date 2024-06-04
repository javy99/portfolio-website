import "./home.css";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { TbArrowBigRightLines, TbChevronsDown } from "react-icons/tb";

const Home = () => {
  return (
    <section id="home" className="home section">
      {/* this div will be only visible at wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/javy99" target="_blank">
            <FiGithub className="icon" />
          </a>
          <a href="https://www.instagram.com/javy___k/" target="_blank">
            <FiInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/jkosimov/" target="_blank">
            <FiLinkedin className="icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* homeContent */}
      <div className="container homeContainer">
        <span className="introText">Hi my name is,</span>

        <h1 className="title">Javlonbek Kosimov</h1>

        <span className="subTitle">
          I develop scalable web based applications and software.
        </span>

        <p className="homeParagraph">
          I code within required coding standards and styles to server the exact
          need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>{" "}
              <TbChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* right div, with email address (Will also be visible at a wider screen only) */}
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a
              href="https://mailto:javlonbek.kosimov.99@gmail.com"
              target="_blank"
            >
              javlonbek.kosimov.99@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
