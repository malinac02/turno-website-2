import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-top">
        <h2 className="about-title">About</h2>
        <p className="about-description">
          <span className="about-description-bold">turno</span> is a mobile app
          developed by a group of passionate Stanford students.
        </p>
        <p className="about-description">
          <span className="about-description-bold">turno</span> simplifies
          choice-making with a digital dice, where each side maps to user-input
          options. It is a
          <span className="about-description-bold">
            {" "}
            streamlined activity prompter{" "}
          </span>
          that
          <span className="about-description-bold">
            {" "}
            transforms the chore of choosing{" "}
          </span>
          into a fun and quick activity, freeing up time and mental energy.
        </p>
      </div>
      <h5 className="about-subtitle">Our Concept</h5>
      <div className="about-video-container">
        <iframe
          width="550"
          height="300"
          src="https://www.youtube.com/embed/v4gpvESwjq4?si=Y6twkmt2yCCPUcJz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="about-video"
        />
      </div>
    </div>
  );
}

export default About;
