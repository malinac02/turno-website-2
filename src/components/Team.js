import "./Team.css";
import { useState } from "react";
import CeciliaHeadshot from "../images/CeciliaHeadshot.png";
import MalinaHeadshot from "../images/MalinaHeadshot.png";
import NazaninHeadshot from "../images/NazaninHeadshot.png";
import PedroHeadshot from "../images/PedroHeadshot.png";
import AbbieHeadshot from "../images/AbbieHeadshot.png";
import CalebHeadshot from "../images/CalebHeadshot.png";
import KarinaHeadshot from "../images/KarinaHeadshot.png";
import { FaLinkedin } from "react-icons/fa";

function Team() {
  const teammates147 = [
    {
      name: "Malina Calarco",
      role1: "Mobile + Web Developer",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/malinacalarco/",
      image: MalinaHeadshot,
    },
    {
      name: "Pedro Civita",
      role1: "Mobile Developer",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/pedro-civita/",
      image: PedroHeadshot,
    },
    {
      name: "Cecilia Conde",
      role1: "User Researcher",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/cecilia-conde-0877091b6/",
      image: CeciliaHeadshot,
    },
    {
      name: "Nazanin Soltan",
      role1: "User Researcher",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/nazanin-soltan-a410b5197/",
      image: NazaninHeadshot,
    },
  ];

  const teammates194h = [
    {
      name: "Malina Calarco",
      role1: "Mobile + Web Developer",
      role2: "",
      linkedin: "https://www.linkedin.com/in/malinacalarco/",
      image: MalinaHeadshot,
    },
    {
      name: "Karina Li",
      role1: "UI/UX Designer",
      role2: "Mobile Developer",
      linkedin: "https://www.linkedin.com/in/karina-li1023/",
      image: KarinaHeadshot,
    },
    {
      name: "Caleb Liu",
      role1: "Mobile Developer",
      role2: "",
      linkedin: "https://www.linkedin.com/in/caleb-liu-34ba8a211/",
      image: CalebHeadshot,
    },
    {
      name: "Abbie Maemoto",
      role1: "Product Manager",
      role2: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/abbiemaemoto/",
      image: AbbieHeadshot,
    },
  ];

  const [teammates, setTeammates] = useState(teammates194h);

  console.log("Current Teammates: ", teammates);
  console.log("Is CS194H Active: ", teammates === teammates194h);
  console.log("Is CS147 Active: ", teammates === teammates147);

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <br />
      <div className="team-toggle">
        <div
          onClick={() => setTeammates(teammates194h)}
          className={
            JSON.stringify(teammates) === JSON.stringify(teammates194h)
              ? `team-toggle-box-active`
              : `team-toggle-box`
          }
        >
          <h4
            className={
              JSON.stringify(teammates) === JSON.stringify(teammates194h)
                ? `team-toggle-text-active`
                : `team-toggle-text`
            }
          >
            CS 194H
          </h4>
        </div>
        <div
          onClick={() => setTeammates(teammates147)}
          className={
            JSON.stringify(teammates) === JSON.stringify(teammates147)
              ? `team-toggle-box-active`
              : `team-toggle-box`
          }
        >
          <h4
            className={
              JSON.stringify(teammates) === JSON.stringify(teammates147)
                ? `team-toggle-text-active`
                : `team-toggle-text`
            }
          >
            CS 147
          </h4>
        </div>
      </div>
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
              <h4 className="teammate-role">
                {teammate.role2 ? teammate.role2 : "\u00A0"}
              </h4>
              <a href={teammate.linkedin} className="linkedin">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
