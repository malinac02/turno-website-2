import "./Team2.css";
import CeciliaHeadshot from "../images/CeciliaHeadshot.png";
import MalinaHeadshot from "../images/MalinaHeadshot.png";
import NazaninHeadshot from "../images/NazaninHeadshot.png";
import PedroHeadshot from "../images/PedroHeadshot.png";
import { FaLinkedin } from "react-icons/fa";

function Team2() {
  const teammates = [
    {
      name: "Cecilia Conde",
      role1: "UI/UX Designer",
      role2: "Mobile Developer",
      linkedin: "https://www.linkedin.com/in/cecilia-conde-0877091b6/",
      image: CeciliaHeadshot,
    },
    {
      name: "Malina Calarco",
      role1: "UI/UX Designer",
      role2: "Mobile/Web Developer",
      linkedin: "https://www.linkedin.com/in/malinacalarco/",
      image: MalinaHeadshot,
    },
    {
      name: "Nazanin Soltan",
      role1: "UI/UX Designer",
      role2: "Mobile Developer",
      linkedin: "https://www.linkedin.com/in/nazanin-soltan-a410b5197/",
      image: NazaninHeadshot,
    },
    {
      name: "Pedro Civita",
      role1: "UI/UX Designer",
      role2: "Mobile Developer",
      linkedin: "https://www.linkedin.com/in/pedro-civita/",
      image: PedroHeadshot,
    },
  ];

  return (
    <div class="responsive-container-block outer-container">
      <div class="responsive-container-block inner-container">
        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
          <div class="content-box">
            <p class="text-blk section-head">Projects et dolore amet</p>
            <p class="text-blk section-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat c Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitati quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container">
          <div class="responsive-container-block team-cards-inner-container">
            {teammates.map((teammate, index) => (
              <div class="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
                <div class="card">
                  <div class="img-box">
                    <img 
                      class="person-img" 
                      src={teammate.image} 
                      alt={"Image of " + teammate.name}
                      />
                  </div>
                  <div class="card-content-box">
                    <p class="text-blk person-name">{teammate.name}</p>
                    <p class="text-blk person-info">
                      {teammate.role1}
                      {teammate.role2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team2;
