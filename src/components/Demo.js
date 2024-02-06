import "./About.css";
import "./Demo.css";

function Demo() {
  return (
    <div className="demo-container">
      <div className="about-top">
        <h2 className="demo-title">Turno Demo</h2>
        <p className="demo-description">
          Check out a demo of <span className="about-description-bold">Turno</span> to see the app in action.
        </p>
      </div>
      <div className="about-video-container">
        {/* <iframe
          width="550"
          height="300"
          src="https://www.youtube.com/watch?v=UQ6yqcV6l7c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="about-video"
        /> */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/UQ6yqcV6l7c?si=0q8f0q0FXjnWw1Nv" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          className="about-video">
        </iframe>
      </div>
    </div>
  );
}

export default Demo;
