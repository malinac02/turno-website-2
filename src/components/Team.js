import "./Team.css";
import CeciliaHeadshot from "../images/CeciliaHeadshot.png";
import MalinaHeadshot from "../images/MalinaHeadshot.png";
import NazaninHeadshot from "../images/NazaninHeadshot.png";
import PedroHeadshot from "../images/PedroHeadshot.png";
import AbbieHeadshot from "../images/AbbieHeadshot.png";
import CalebHeadshot from "../images/CalebHeadshot.png";
import KarinaHeadshot from "../images/KarinaHeadshot.png";
import { FaLinkedin } from "react-icons/fa";

function Team() {
  const teammates = [
    {
      name: "Cecilia Conde",
      role1: "User Researcher",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/cecilia-conde-0877091b6/",
      image: CeciliaHeadshot,
    },
    {
      name: "Malina Calarco",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/malinacalarco/",
      image: MalinaHeadshot,
    },
    {
      name: "Nazanin Soltan",
      role1: "User Researcher",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/nazanin-soltan-a410b5197/",
      image: NazaninHeadshot,
    },
    {
      name: "Pedro Civita",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/pedro-civita/",
      image: PedroHeadshot,
    },
  ];

  const teammates2 = [
    {
      name: "Abbie Maemoto",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/abbiemaemoto/",
      image: AbbieHeadshot,
    },
    {
      name: "Caleb Liu",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/caleb-liu-34ba8a211/",
      image: CalebHeadshot,
    },
    {
      name: "Karina Li",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/karina-li1023/",
      image: KarinaHeadshot,
    },
    {
      name: "Malina Calarco",
      role1: "UI/UX Designer",
      role2: "Developer",
      linkedin: "https://www.linkedin.com/in/malinacalarco/",
      image: MalinaHeadshot,
    },
  ];

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <br />
      <div className="team-row">
        {teammates.map((teammate, index) => (
          <div className="teammate-container" key={index}>
            <div className="profile-image-container">
              <img
                src={teammate.image}
                alt={"Image of " + teammate.name}
                className="profile-image"
              />
            </div>
            <div className="teammate-info-container">
              <h2 className="teammate-name">{teammate.name}</h2>
              <h4 className="teammate-role">{teammate.role1}</h4>
              <h4 className="teammate-role">{teammate.role2}</h4>
              <a href={teammate.linkedin} className="linkedin">
                <FaLinkedin className="linkedin-icon" />
                <p className="linkedin-text">LinkedIn</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="team-row">
        {teammates2.map((teammate, index) => (
          <div className="teammate-container" key={index}>
            <div className="profile-image-container">
              <img
                src={teammate.image}
                alt={"Image of " + teammate.name}
                className="profile-image"
              />
            </div>
            <div className="teammate-info-container">
              <h2 className="teammate-name">{teammate.name}</h2>
              <h4 className="teammate-role">{teammate.role1}</h4>
              <h4 className="teammate-role">{teammate.role2}</h4>
              <a href={teammate.linkedin} className="linkedin">
                <FaLinkedin className="linkedin-icon" />
                <p className="linkedin-text">LinkedIn</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
