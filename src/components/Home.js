import "./Home.css";
import CasinoIcon from "@mui/icons-material/Casino";
import Turno3Screens from "../images/Turno3Screens.png";
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import ReadMeV3 from "../pdfs/194H/ReadMeV3.pdf";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <div className="home-title-dice">
            <h1 className="home-title">turno</h1>
            <CasinoIcon className="home-dice" fontSize="default" />
          </div>
          <h4 className="home-subtitle">
            Get rolling on making daily decisions
          </h4>
          <div className="home-button-container">
            <a
              className="home-button-primary"
              href={ReadMeV3}
              alt={"turno README"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the app
            </a>
            <Link
              className="home-button-secondary"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="iphone-image-container">
          <img
            src={Turno3Screens}
            alt="Turno Home Screen"
            className="iphone-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
