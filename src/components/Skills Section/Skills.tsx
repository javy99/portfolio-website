import React from "react";
import "./skills.css";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiAdobexd, SiAdobephotoshop, SiMysql } from "react-icons/si";
import { FaHtml5, FaGitSquare } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";

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
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">2 Years Experience</span>
          </div>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <BiLogoReact className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiPhp className="icon" />
              </div>
              <span className="skillName">PHP</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle">2 Years Experience</span>
          </div>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <CgFigma className="icon" />
              </div>
              <span className="skillName">Figma</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobexd className="icon" />
              </div>
              <span className="skillName">XD</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className="icon" />
              </div>
              <span className="skillName">Photoshop</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">2 Years Experience</span>
          </div>

          <div className="generalSkills">
            {/* single skills div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsWordpress className="icon" />
              </div>
              <span className="skillName">Wordpress</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className="icon" />
              </div>
              <span className="skillName">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
