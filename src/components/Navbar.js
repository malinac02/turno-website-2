import "./Navbar.css";
import CasinoIcon from "@mui/icons-material/Casino";
import { Link } from "react-scroll";

function Navbar({ currentSection }) {
  let navbarClass = "navbar-container";
  let logoClass = "navbar-logo navbar-left";

  if (currentSection === "home-top") {
    navbarClass += " home-navbar";
    logoClass += " hidden-logo"
  }
  else if (currentSection === "home") {
    navbarClass += " white-text-navbar";
    logoClass += " hidden-logo"
  }
  else if (currentSection === "design-process" || currentSection === "team") {
    navbarClass += " white-text-navbar";
  } else if (currentSection === "demo") {
    navbarClass += " salmon-navbar";
  } else {
    navbarClass += " black-text-navbar";
  }

  return (
    <div className={navbarClass}>
      <Link
        className={logoClass}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <CasinoIcon className="die-icon" fontSize="default" />
        turno
      </Link>
      <ul className="navbar-right">
        <li className="navbar-li">
          <Link
            className="navbar-text"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="navbar-li">
          <Link
            className="navbar-text"
            to="design-process"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Design Process
          </Link>
        </li>
        <li className="navbar-li">
          <Link
            className="navbar-text"
            to="demo"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Demo
          </Link>
        </li>
        <li className="navbar-li">
          <Link
            className="navbar-text"
            to="team"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Team
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
