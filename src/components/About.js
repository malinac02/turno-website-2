import "./About.css";
import Confetti from "../images/Confetti.png";
import CreateNewDice from "../images/CreateNewDice.png";
import RollDice from "../images/RollDice.png";
import CommunityDice from "../images/CommunityDice.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-top">
        {/* <h2 className="about-title">About</h2> */}
        <div className="about-problem-solution">
          <p className="about-description">
            <p className="about-subtitle">Problem</p>
            Our world is saturated with choices, leading to endless debates,
            indecisiveness, and precious time lost.
          </p>
          <p className="about-description">
            <p className="about-subtitle">Solution</p>
            <span className="about-description-bold">turno</span> is an app
            designed to simplify choice-making by transforming the chore of
            choosing into a fun and quick activity.
          </p>
        </div>
      </div>
      <div className="about-key-features">
        <hr className="about-line" />
        <p className="about-feature-text">Key Features</p>
        <hr className="about-line" />
      </div>
      <div className="about-dice-section">
        <div className="about-dice">
          <p className="about-dice-text">Create a Dice</p>
          <img
            src={CreateNewDice}
            alt="Create New Dice screen of turno"
            className="about-dice-screen"
          />
        </div>
        <div className="about-dice">
          <p className="about-dice-text">Roll</p>
          <img
            src={RollDice}
            alt="Roll Dice screen of turno"
            className="about-dice-screen"
          />
        </div>
        <div className="about-dice">
          <p className="about-dice-text">Explore Community</p>
          <img
            src={CommunityDice}
            alt="Roll Dice screen of turno"
            className="about-dice-screen"
          />
        </div>
        {/* Removed the duplicated and improperly opened <div> tags */}
      </div>

      {/* The commented out section seems like it was meant to be included but was not properly opened/closed */}
      {/* Uncomment and correct as needed */}
      {/* <h5 className="about-subtitle">Our Concept</h5> */}
      {/* <div className="about-video-container">
        <iframe
          width="550"
          height="300"
          src="https://www.youtube.com/embed/v4gpvESwjq4?si=Y6twkmt2yCCPUcJz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="about-video"
        ></iframe>
      </div> */}
    </div>
  );
}

export default About;
