import "./education.css";

const educationData = [
  {
    id: 1,
    school: "Eötvös Loránd University",
    location: "Budapest, Hungary",
    degree: "Bachelor of Science – BS, Computer Science",
    date: "Sep 2021 – now (exp. July 2024)",
  },
  {
    id: 2,
    school: "Southwest Petroleum University",
    location: "Chengdu, China",
    degree: "Bachelor of Engineering – BS, Software Engineering",
    date: "Sep 2019 – July 2021",
  },
];

const Education = () => {
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
        {educationData.map(({ id, school, location, degree, date }) => (
          <div key={id} className="educationItem">
            <h3 className="educationSchool">{school}</h3>
            <span className="educationLocation">{location}</span>
            <span className="educationDegree">{degree}</span>
            <span className="educationDate">{date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
