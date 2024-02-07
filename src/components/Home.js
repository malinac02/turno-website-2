import "./Home.css";
import CasinoIcon from "@mui/icons-material/Casino";
import Turno3Screens from "../images/Turno3Screens.png";
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <div className="home-title-dice">
            <h1 className="home-title">turno</h1>
            <CasinoIcon className="home-dice" fontSize="default" />
          </div>
          <h4 className="home-subtitle">Roll your way through the day</h4>
          <div className="home-button-container">
            <Link
              className="home-button-primary"
              // to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Get the app
              {/* <FaArrowDown className="home-button-icon" /> */}
            </Link>
            <Link
              className="home-button-secondary"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Learn more
              {/* <FaArrowRight className="home-button-icon" /> */}
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
