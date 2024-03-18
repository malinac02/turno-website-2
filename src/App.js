import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import DesignProcess from "./components/DesignProcess.js";
import DesignProcess2 from "./components/DesignProcess2.js";
import Demo from "./components/Demo.js";
import Team from "./components/Team.js";
import Team2 from "./components/Team2.js";
import "./fonts/Poppins-Bold.woff";
import "./fonts/Poppins-Medium.woff";
import "./fonts/Poppins-Light.woff";
import "./App.css";
import "./fonts.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const aboutOffset = document.getElementById("about").offsetTop - 45;
      const demoOffset = document.getElementById("demo").offsetTop - 45;
      const designProcessOffset =
        document.getElementById("design-process").offsetTop - 45;
      const designProcess2Offset =
        document.getElementById("design-process-2").offsetTop - 45;
      const teamOffset = document.getElementById("team").offsetTop - 45;

      const homeMidpoint = document.getElementById("home").offsetTop + 50;

      if (scrollPosition < homeMidpoint) {
        setCurrentSection("home-top");
      } else if (scrollPosition < aboutOffset) {
        setCurrentSection("home");
      } else if (scrollPosition < demoOffset) {
        setCurrentSection("about");
      } else if (scrollPosition < designProcessOffset) {
        setCurrentSection("demo");
      } else if (scrollPosition < designProcess2Offset) {
        setCurrentSection("design-process");
      } else if (scrollPosition < teamOffset) {
        setCurrentSection("design-process-2");
      } else {
        setCurrentSection("team");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* <div className="container"> */}

      <header>
        <Navbar currentSection={currentSection} />
      </header>
      <main className="body">
        <article id="home" className="section home">
          <Home />
        </article>
        <article id="about" className="section about">
          <About />
        </article>
        <article id="demo" className="section demo">
          <Demo />
        </article>
        <article id="design-process" className="section design-process">
          <DesignProcess />
        </article>
        <article id="design-process-2" className="section design-process-2">
          <DesignProcess2 />
        </article>
        <article id="team" className="section team">
          {/* <Team /> */}
          <Team />
        </article>
        <footer className="footer">
          <p className="footer-text">&copy; 2024 turno. All rights reserved.</p>
        </footer>
      </main>
      {/* </div> */}
    </div>
  );
}

export default App;
