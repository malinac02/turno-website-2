import "./About.css";
import "./Demo.css";
import TurnoDemo from "../videos/TurnoDemo2.mov";

function Demo() {
  return (
    <div className="demo-container">
      <div className="about-top">
        <h2 className="demo-title">Demo</h2>
      </div>
      <div className="demo-videos">
        <div className="about-video-container">
          <iframe
            width="500"
            height="350"
            src="https://www.youtube.com/embed/WP6tEXwbzp8?si=A5ygZ1D2Zb9cQIa8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="about-video"
          ></iframe>
        </div>
        <div className="about-video-container">
          <iframe
            width="500"
            height="350"
            src="https://www.youtube.com/embed/S0-yE3L93ow?si=lopcaoG2nUEW_I2T"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="about-video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Demo;
