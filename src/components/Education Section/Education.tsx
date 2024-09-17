import "./education.css";
import elteLogoDark from "../../assets/education/elte.png";
import elteLogoLight from "../../assets/education/elte-light.png";
import swpuLogo from "../../assets/education/swpu.png";

const educationData = [
  {
    id: 1,
    school: "Eötvös Loránd University",
    location: "Budapest, Hungary",
    degree: "Bachelor of Science – BS, Computer Science",
    date: "Sep 2021 – July 2024",
    logoLight: elteLogoLight,
    logoDark: elteLogoDark,
  },
  {
    id: 2,
    school: "Southwest Petroleum University",
    location: "Chengdu, China",
    degree: "Bachelor of Engineering – BS, Software Engineering",
    date: "Sep 2019 – July 2021",
    logoLight: swpuLogo,
    logoDark: swpuLogo,
  },
];

interface EducationProps {
  theme: string;
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <section id="education" className="education container section">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Education
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="educationList">
        {educationData.map(
          ({ id, school, location, degree, date, logoLight, logoDark }) => (
            <div key={id} className="educationItem">
              <img
                src={theme === "light" ? logoDark : logoLight}
                alt={`${school} logo`}
                className="educationLogo"
              />
              <h3 className="educationSchool">{school}</h3>
              <span className="educationLocation">{location}</span>
              <span className="educationDegree">{degree}</span>
              <span className="educationDate">{date}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Education;
