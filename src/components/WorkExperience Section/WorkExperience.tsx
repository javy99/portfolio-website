import "./work.css";
import nokiaLogo from "../../assets/work/nokia.svg";
import limeLightLogo from "../../assets/work/limelight.webp";
import uzinfocomLogo from "../../assets/work/uzinfocom.png";

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    date: "Sep. 2024 – Present",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Develop and maintain cloud-native software for Nokia’s ngNcom platform, a critical solution for automating and managing 5G network operations.",
      "Contribute to a continuous deployment (CD) product that supports automated deployment and testing of Nokia network elements on customer premises.",
      "Participate in full software development lifecycle using Agile/Scrum methodologies, including estimating work amounts, contributing to detailed work planning, and executing tasks.",
      "Implement automated deployment solutions for Nokia network elements, focusing on providing customers with real automated continuous deployment capabilities.",
      "Utilize Go and Python for development, with a focus on Linux environments.",
      "Apply container technologies (K8S, Docker, HELM) to support the platform’s cloud-native architecture.",
      "Integrate existing open-source and Nokia internal components, while developing new components as needed to achieve desired functionalities.",
      "Maintain and improve CI/CD pipelines and environments to ensure efficient and reliable software delivery.",
      "Collaborate with global Nokia teams to foster a comprehensive approach to software development.",
    ],
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    date: "Mar 2024 – August 2024",
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
    id: 3,
    title: "Frontend Developer Intern",
    date: "Mar 2023 – Feb 2024",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Built and maintained UI components for the Nokia CBAM application using ReactJS, TypeScript, and Redux, ensuring code scalability and maintainability within a component-based architecture.",
      "Optimized performance by improving asset loading, implementing code splitting and caching strategies, resulting in faster load times.",
      "Collaborated with designers to refine UI elements in React, incorporating animations and transitions. Utilized SCSS for component-specific styling, while leveraging an internal Nokia UI library for consistent design.",
      "Managed version control and code reviews using Gerrit. Conducted unit testing with Jest and utilized Jenkins for CI/CD, automating deployment and ensuring code quality and stability.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    date: "Mar 2024 – May 2024",
    company: "Lime Light Renhold AS",
    location: "Oslo, Norway",
    logo: limeLightLogo,
    responsibilities: [
      "Developed responsive web interfaces using HTML5, CSS3 (SASS), and JavaScript, applying Bootstrap for consistent styling and improved user experience across devices.",
      "Enhanced UI/UX by implementing interactive features and animations, ensuring adherence to modern design principles and improving overall usability.",
      "Integrated frontend with backend services through RESTful APIs, ensuring seamless data retrieval and updates while managing error handling and data validation.",
      "Implemented progressive web app (PWA) features to improve performance and offline functionality.",
    ],
  },
  {
    id: 5,
    title: "Web Developer",
    date: "Sep 2020 – Dec 2020",
    company: "UZINFOCOM",
    location: "Tashkent, Uzbekistan",
    logo: uzinfocomLogo,
    responsibilities: [
      "Developed responsive, mobile-first websites using HTML5, CSS3, and Flexbox/Grid, ensuring consistent user experiences across devices.",
      "Ensured cross-browser compatibility (Chrome, Firefox, Safari, Edge) with JavaScript polyfills and CSS fallbacks for consistent functionality.",
      "Integrated RESTful APIs using JavaScript, managing data parsing and front-end state management for seamless, real-time experiences.",
      "Implemented web performance optimization techniques to improve page load times and overall site performance.",
      "Utilized front-end build tools like Webpack and Babel to optimize and bundle assets.",
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
