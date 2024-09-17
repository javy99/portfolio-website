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
          <h4> I am a dedicated Frontend Developer with experience in ReactJS, TypeScript, and Python. My work at Nokia Solutions and Networks Kft. involved building scalable UI components and enhancing application performance, while my time at Lime Light Renhold AS and UZINFOCOM focused on creating responsive, user-friendly web interfaces.
            <br />
            With a strong background in both practical development and rigorous testing, I excel in delivering high-quality, dynamic web applications. I am passionate about continuous learning and thrive in collaborative environments, always seeking to apply my skills to new challenges and innovative projects.

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
