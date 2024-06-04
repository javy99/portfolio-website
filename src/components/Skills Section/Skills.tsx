import "./skills.css";
// Languages =======================================>
import htmlLogo from "../../assets/skills/html.svg";
import cssLogo from "../../assets/skills/css.svg";
import jsLogo from "../../assets/skills/javascript.svg";
import pythonLogo from "../../assets/skills/python.svg";
import phpLogo from "../../assets/skills/php.svg";
import tsLogo from "../../assets/skills/typescript.svg";
import reactLogo from "../../assets/skills/react.svg";
// Frameworks =======================================>
import expressLogo from "../../assets/skills/express.svg";
import laravelLogo from "../../assets/skills/laravel.svg";
import nodeLogo from "../../assets/skills/nodejs.svg";
import robotLogo from "../../assets/skills/robot-framework.svg";
import chakraLogo from "../../assets/skills/chakra-ui.svg";
import tailwindLogo from "../../assets/skills/tailwind-css.svg";
import jestLogo from "../../assets/skills/jest.svg";
import seleniumLogo from "../../assets/skills/selenium.svg";
// Developer Tools =======================================>
import gitLogo from "../../assets/skills/git.svg";
import jiraLogo from "../../assets/skills/jira.svg";
import jenkinsLogo from "../../assets/skills/jenkins.svg";
import reduxLogo from "../../assets/skills/redux.svg";
import mongoLogo from "../../assets/skills/mongo.svg";
import figmaLogo from "../../assets/skills/figma.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* skills container */}
      <div className="skillsContainer grid">
        {/* single Group of skills */}
        <div className="skillGroup">
          <h2 className="title">Languages</h2>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <img src={htmlLogo} alt="HTML" className="techLogo" />
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkill">
              <img src={cssLogo} alt="CSS" className="techLogo" />
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <img src={jsLogo} alt="JS" className="techLogo" />
              <span className="skillName">JS</span>
            </div>
            <div className="singleSkill">
              <img src={tsLogo} alt="TS" className="techLogo" />
              <span className="skillName">TS</span>
            </div>

            <div className="singleSkill">
              <img src={phpLogo} alt="PHP" className="techLogo" />
              <span className="skillName">PHP</span>
            </div>

            <div className="singleSkill">
              <img src={pythonLogo} alt="Python" className="techLogo" />
              <span className="skillName">Python</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <h2 className="title">Frameworks</h2>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <img src={reactLogo} alt="React" className="techLogo" />
              <span className="skillName">React</span>
            </div>
            <div className="singleSkill">
              <img src={expressLogo} alt="Express" className="techLogo" />
              <span className="skillName">Express</span>
            </div>
            <div className="singleSkill">
              <img src={nodeLogo} alt="Node JS" className="techLogo" />
              <span className="skillName">Node JS</span>
            </div>
            <div className="singleSkill">
              <img src={laravelLogo} alt="Laravel" className="techLogo" />
              <span className="skillName">Laravel</span>
            </div>
            <div className="singleSkill">
              <img src={jestLogo} alt="Jest" className="techLogo" />
              <span className="skillName">Jest</span>
            </div>
            <div className="singleSkill">
              <img src={robotLogo} alt="Robot" className="techLogo" />
              <span className="skillName">Robot</span>
            </div>

            <div className="singleSkill">
              <img src={chakraLogo} alt="Chakra UI" className="techLogo" />
              <span className="skillName">Chakra UI</span>
            </div>
            <div className="singleSkill">
              <img src={tailwindLogo} alt="Tailwind CSS" className="techLogo" />
              <span className="skillName">Tailwind CSS</span>
            </div>
            <div className="singleSkill">
              <img src={reduxLogo} alt="Redux" className="techLogo" />
              <span className="skillName">Redux</span>
            </div>
            <div className="singleSkill">
              <img src={mongoLogo} alt="Mongo DB" className="techLogo" />
              <span className="skillName">Mongo DB</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <h2 className="title">Developer Tools</h2>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <img src={gitLogo} alt="Git" className="techLogo" />
              <span className="skillName">Git</span>
            </div>
            <div className="singleSkill">
              <img src={jiraLogo} alt="Jira" className="techLogo" />
              <span className="skillName">Jira</span>
            </div>
            <div className="singleSkill">
              <img src={jenkinsLogo} alt="Jenkins" className="techLogo" />
              <span className="skillName">Jenkins</span>
            </div>
            <div className="singleSkill">
              <img src={seleniumLogo} alt="Selenium" className="techLogo" />
              <span className="skillName">Selenium</span>
            </div>
            <div className="singleSkill">
              <img src={figmaLogo} alt="Figma" className="techLogo" />
              <span className="skillName">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
