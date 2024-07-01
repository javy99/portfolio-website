import "./work.css";
import nokiaLogo from "../../assets/work/nokia.svg";
import limeLightLogo from "../../assets/work/limelight.webp";
import uzinfocomLogo from "../../assets/work/uzinfocom.png";

const experienceData = [
  {
    id: 1,
    title: "R&D Trainee",
    date: "Mar 2024 – Present",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Implemented GUI automation tests for CBAM using Robot Framework, Selenium, and Python, increasing testing efficiency by 30%.",
      "Designed functions for API calls in Python, enhancing the automation testing framework.",
      "Automated tests for CBAM, boosting system reliability by 15%.",
      "Delivered tests to the team, showcasing a 20% improvement in system functionality.",
      "Resolved CBAM frontend bugs with React and TypeScript, reducing user-reported issues by 25%.",
    ],
  },
  {
    id: 2,
    title: "Trainee NCD (Front-end Development Internship)",
    date: "Mar 2023 – Feb 2024",
    company: "Nokia Solutions and Networks Kft.",
    location: "Budapest, Hungary",
    logo: nokiaLogo,
    logoClass: "nokiaLogo",
    responsibilities: [
      "Utilized React JS and TypeScript to build a robust UI for Nokia CloudBand Application Manager (CBAM), increasing user engagement by 15%.",
      "Collaborated with UX/UI designers to refresh CBAM’s interface, achieving a 20% uplift in user satisfaction.",
      "Implemented new features and optimized existing ones, enhancing the application’s performance by 10%.",
      "Refined 50+ pages of CBAM documentation, facilitating smoother development and better user understanding.",
      "Maintained 20+ frontend dependencies, improving security and reducing vulnerabilities by 25%.",
    ],
  },
  {
    id: 3,
    title: "Web Development Intern",
    date: "Mar 2024 – May 2024",
    company: "Lime Light Renhold AS",
    location: "Oslo, Norway",
    logo: limeLightLogo,
    responsibilities: [
      "Accomplished a 320-hour internship under the ERASMUS+ KA103 program, contributing to a 20% increase in team productivity.",
    ],
  },
  {
    id: 4,
    title: "Web Developer Intern",
    date: "Sep 2020 – Dec 2020",
    company: "UZINFOCOM",
    location: "Tashkent, Uzbekistan",
    logo: uzinfocomLogo,
    responsibilities: [
      "Improved 10+ websites using HTML, CSS, and JavaScript, resulting in a 30% improvement in functionality and user experience.",
      "Performed code reviews to detect and fix front-end bugs, reducing the error rate by 20%.",
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
