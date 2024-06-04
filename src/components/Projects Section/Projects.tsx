import "./projects.css";
import { AiFillYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
// Images =======================================>
import boopGameImg from "../../assets/projects/boop-game.png";
import navM8Img from "../../assets/projects/navm8.png";
import lightBulbImg from "../../assets/projects/lightbulb-game.png";
import starWars from "../../assets/projects/star-wars.png";
import pizzaCustom from "../../assets/projects/pizza-customization.png";
import bombermanImg from "../../assets/projects/bomberman.png";
import recipeImg from "../../assets/projects/recipe.png";
import bookRental from "../../assets/projects/book-rental.png";
import familyBudget from "../../assets/projects/family_budget.png";

const data = [
  {
    id: 1,
    image: navM8Img,
    demo: "#",
    liveLink: "https://navm8.vercel.app/",
    github: "https://github.com/javy99/navM8",
    title: "navM8",
    desc: "Web Application for Enhancing Travel Experiences through Local Guide Engagement",
    tech1: "MongoDB",
    tech2: "Express.js",
    tech3: "React JS",
    tech4: "Node JS",
  },
  {
    id: 2,
    image: boopGameImg,
    demo: "#",
    liveLink: "https://boop-game.vercel.app/",
    github: "https://github.com/javy99/Boop-Game",
    title: "Boop Board Game",
    desc: "An engaging JavaScript strategy game where players maneuver kittens on a grid, navigating distinctive rules to achieve alignment victories",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 3,
    image: lightBulbImg,
    demo: "#",
    liveLink: "https://light-bulb-placement-game.vercel.app/",
    github: "https://github.com/javy99/star-wars",
    title: "Light Bulb Placement Game",
    desc: "A JavaScript puzzle game for strategically placing light bulbs in a grid, adhering to rules, ensuring all spaces in a palace are illuminated",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 4,
    image: starWars,
    demo: "#",
    liveLink: "https://star-wars-red-mu.vercel.app/",
    github: "https://github.com/javy99/Light-Bulb-Placement-Game",
    title: "Star Wars",
    desc: "A React app that displays Star Wars data. It uses JSON-Server for live content and Figma for design, making it dynamic and user-friendly",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "React JS",
    tech4: "Chakra UI",
  },
  {
    id: 5,
    image: pizzaCustom,
    demo: "#",
    liveLink: "https://pizza-customization-app.vercel.app/",
    github: "https://github.com/javy99/Pizza-Customization-App",
    title: "Pizza Customization App",
    desc: "A pizza customization app lets users select pizza size and toppings, with a summary box showing selections and a real-time cost calculator based on their choices.",
    tech1: "React JS",
  },
  {
    id: 6,
    image: bombermanImg,
    demo: "#",
    liveLink: "#",
    github: "https://github.com/javy99/bomberman",
    title: "Multiplayer Bomberman",
    desc: "Bomberman is a maze-based game where players place bombs to destroy obstacles, defeat enemies, and find the exit. The goal is to clear levels and compete against others in multiplayer mode.",
    tech1: "Java",
  },
  {
    id: 7,
    image: recipeImg,
    demo: "#",
    liveLink: "#",
    github: "https://github.com/javy99/recipe-book",
    title: "Recipe Book",
    desc: "A JavaScript web app that allows users to manage, explore, and favorite recipes. Features include adding, editing, and deleting recipes, with a user- friendly interface organized into modular components",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 8,
    image: bookRental,
    demo: "#",
    liveLink: "#",
    github: "https://github.com/javy99/book-rental-system",
    title: "Book Rental System",
    desc: "This Laravel project is an online book rental system featuring functionalities for both users and librarians. It includes user authentication, book browsing, searching, borrowing, and management functionalities.",
    tech1: "PHP Laravel",
    tech2: "Tailwind CSS",
  },
  {
    id: 9,
    image: familyBudget,
    demo: "#",
    liveLink: "#",
    github: "https://github.com/javy99/family-budget",
    title: "Family Budget",
    desc: "An Angular app with a Laravel backend for managing family budgets. Features include adding, editing, and listing budget entries with title, amount, and category. It also displays overall income and expenses.",
    tech1: "Angular",
    tech2: "Laravel",
    tech3: "SQLite",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">05.</span>
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
