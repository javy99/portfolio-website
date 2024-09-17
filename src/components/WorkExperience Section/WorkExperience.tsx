import "./work.css";
import nokiaLogo from "../../assets/work/nokia.svg";
import limeLightLogo from "../../assets/work/limelight.webp";
import uzinfocomLogo from "../../assets/work/uzinfocom.png";

const experienceData = [
  {
    id: 1,
    title: "Junior Software Engineer",
    date: "Mar 2024 – July 2024",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Designed and implemented GUI automation tests using Selenium, Robot Framework, and Python, enhancing testing coverage and efficiency for Nokia CBAM application’s frontend functionalities.",
      "Developed and maintained automated test scripts to identify and resolve issues in CBAM’s user interface, contributing to improved application stability and reliability.",
      "Utilized ReactJS and TypeScript to debug and resolve issues, optimize frontend performance, enhance user experience, and update frontend dependencies.",
      "Contributed to project documentation and code reviews, improving team collaboration and ensuring high standards for code quality and testing practices.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    date: "Mar 2023 – Feb 2024",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Built and maintained UI components for the Nokia CBAM application using ReactJS, TypeScript, and Redux, ensuring code scalability and maintainability within a component-based architecture.",
      "Connected frontend to RESTful APIs, managing real-time data on the dashboard with TypeScript for error handling and data validation, ensuring smooth backend communication.",
      "Optimized performance by improving asset loading, implementing code splitting and caching techniques, resulting in faster load times and enhanced user experience.",
      "Collaborated with UI/UX designers to refine UI elements in React, incorporating animations and transitions. Utilized SCSS for component-specific styling, while leveraging an internal Nokia UI library for consistent design.",
      "Managed version control and code reviews using Gerrit. Conducted unit testing with Jest and utilized Jenkins for CI/CD, automating deployment and ensuring code quality and stability.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    date: "Mar 2024 – May 2024",
    company: "Lime Light Renhold AS",
    location: "Oslo, Norway",
    logo: limeLightLogo,
    responsibilities: [
      "Developed responsive web interfaces using HTML5, CSS3 (SASS), and JavaScript, applying Bootstrap for consistent styling and improved user experience across devices.",
      "Enhanced UI/UX by implementing interactive features and animations, ensuring adherence to modern design principles and improving overall usability.",
      "Integrated frontend with backend services through RESTful APIs, ensuring seamless data retrieval and updates while managing error handling and data validation.",
    ],
  },
  {
    id: 4,
    title: "Web Developer",
    date: "Sep 2020 – Dec 2020",
    company: "UZINFOCOM",
    location: "Tashkent, Uzbekistan",
    logo: uzinfocomLogo,
    responsibilities: [
      "Developed responsive, mobile-first websites using HTML5, CSS3, and Flexbox/Grid, ensuring consistent user experiences across devices.",
      "Ensured cross-browser compatibility (Chrome, Firefox, Safari, Edge) through JavaScript polyfills and CSS fallbacks for consistent functionality.",
      "Implemented dynamic UI elements with JavaScript, enhancing interactivity. Collaborated with UI/UX designers to translate wireframes into functional interfaces.",
      "Integrated RESTful APIs using JavaScript, managing data parsing and front-end state for seamless, real-time user experiences.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="work container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Work Experience
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="timeline">
        {experienceData.map(
          ({
            id,
            title,
            date,
            company,
            location,
            logo,
            responsibilities,
            logoClass,
          }) => (
            <div key={id} className="timelineItem">
              <div className="timelineContent">
                <img
                  src={logo}
                  alt={company}
                  className={`companyLogo ${logoClass}`}
                />
                <h3 className="workTitle">{title}</h3>
                <span className="workDate">{date}</span>
                <span className="workCompany">{company}</span>
                <span className="workLocation">{location}</span>
                <h4 className="responsibilitiesHeading">Responsibilities:</h4>
                <ul className="workResponsibilities">
                  {responsibilities.map((resp, index) => (
                    <li key={index} style={{ marginBottom: "5px" }}>
                      - {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
