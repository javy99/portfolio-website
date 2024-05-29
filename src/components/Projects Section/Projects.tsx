import React from "react";
import "./projects.css";
import { AiFillYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
// Images =======================================>
import img from "../../assets/boop-game.png";

const data = [
  {
    id: 1,
    image: img,
    demo: "https://www.youtube.com/watch?v=9Q9fzHf0m8w",
    liveLink: "https://boop-game.vercel.app/",
    github: "",
    title: "Hotel Incients Docket",
    desc: "This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel,",
    tech1: "Html",
    tech2: "Css",
    tech3: "JavaScript",
    tech4: "PHP",
  },
  {
    id: 2,
    image: img,
    demo: "https://www.youtube.com/watch?v=9Q9fzHf0m8w",
    liveLink: "https://boop-game.vercel.app/",
    github: "",
    title: "Hotel Incients Docket",
    desc: "This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel,",
    tech1: "Html",
    tech2: "Css",
    tech3: "JavaScript",
    tech4: "PHP",
  },
  {
    id: 3,
    image: img,
    demo: "https://www.youtube.com/watch?v=9Q9fzHf0m8w",
    liveLink: "https://boop-game.vercel.app/",
    github: "",
    title: "Hotel Incients Docket",
    desc: "This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel,",
    tech1: "Html",
    tech2: "Css",
    tech3: "JavaScript",
    tech4: "PHP",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            demo,
            title,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank">
                      <AiFillYoutube className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
