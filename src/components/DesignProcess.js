import "./DesignProcess.css";
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaYoutube, FaFigma, FaFile, FaMobile, FaFileImage, FaFileArrowDown, FaFileLines } from 'react-icons/fa6';
import A1pdf from "../pdfs/TurnoA1Slides.pdf";
import A1ppt from "../pdfs/TurnoA1Slides.pptx";
import A2pdf from "../pdfs/TurnoA2Slides.pdf";
import A2ppt from "../pdfs/TurnoA1Slides.pptx";
import A4pdf from "../pdfs/TurnoA4Slides.pdf";
import A4ppt from "../pdfs/TurnoA4Slides.pptx";
import A5pdf from "../pdfs/TurnoA5Slides.pdf";
import A5ppt from "../pdfs/TurnoA5Slides.pptx";
import A6pdf from "../pdfs/TurnoA6Slides.pdf";
import A6ppt from "../pdfs/TurnoA6Slides.pptx";
import A6readme from "../pdfs/TurnoA6ReadMe.pdf";
import A8pdf from "../pdfs/TurnoA8Slides.pdf";
import A8ppt from "../pdfs/TurnoA8Slides.pptx";
import A8readme from "../pdfs/TurnoA8ReadMe.pdf";
import A10pitchpdf from "../pdfs/TurnoA10PitchSlide.pdf"
import A10pitchppt from "../pdfs/TurnoA10PitchSlide.pptx"
import A10posterpdf from "../pdfs/TurnoA10Poster.pdf"
import A10posterppt from "../pdfs/TurnoA10Poster.pptx"
import A10reportpdf from "../pdfs/TurnoA10Report.pdf"

import A9HEpdf from "../pdfs/TurnoHE.pdf";
import A9HEdocx from "../pdfs/TurnoHE.docx";
import ConceptVideo from "../videos/TurnoConceptVideo.mp4";
import TurnoDemo from "../videos/TurnoDemo.mp4";


function DesignProcess() {
  const items = [
    { 
      title: "Needfinding", 
      // subtitle1: "Slides:",
      "slides pdf": A1pdf, 
      "slides pptx": A1ppt,
    },
    { 
      title: "POV, HMW, Experience Prototypes", 
      // subtitle1: "Slides:",
      "slides pdf": A2pdf, 
      "slides pptx": A2ppt,
    },
    { 
      title: "Concept Video", 
      // subtitle1: "Slides:",
      "slides pdf": A4pdf,
      "slides pptx": A4ppt,
      // subtitle2: "Video:",
      youtube: "https://youtu.be/UodGwjzAHGI?si=aYD30W_8lNBmDW0v",
      "save video": ConceptVideo,
    },
    { 
      title: "Lo-Fidelity Prototype", 
      // subtitle1: "Slides:",
      "slides pdf": A5pdf, 
      "slides pptx": A5ppt,
    },
    { 
      title: "Medium-Fidelity Prototype", 
      // subtitle1: "Slides:",
      "slides pdf": A6pdf, 
      "slides pptx": A6ppt, 
      // subtitle2: "Med-Fi:",
      figma: "https://www.figma.com/file/RDkSKAbDRIfpmg8ZrJzkEM/A6-Turno-Med-Fi-Prototype?type=design&node-id=1-451&mode=design&t=aLDPeAQr758KHLLV-0",
      readme: A6readme,
    },
    {
      title: "High-Fidelity Prototype", 
      // subtitle1: "Slides:",
      "slides pdf": A8pdf,
      "slides pptx": A8ppt,
      // subtitle2: "Hi-Fi:",
      "hi-fi": null,
      readme: A8readme,
    },
    {
      title: "Heuristic Evaluation Synthesis", 
      // subtitle1: "Report:",
      "HE pdf": A9HEpdf,
      "HE docx": A9HEdocx,
    },
    {
      title: "Poster, Pitch, & Demo Video", 
      // subtitle1: "Pitch Slide:",
      "poster pdf": A10posterpdf,
      "poster pptx": A10posterppt,
      // subtitle2: "Poster:",
      "pitch pdf": A10pitchpdf,
      "pitch pptx": A10pitchppt,
      // subtitle3: "Demo Video:",
      demo: "https://www.youtube.com/watch?v=UQ6yqcV6l7c&t=8s",
      "save video": TurnoDemo,
    },
    {
      title: "Final Report", 
      // subtitle1: "Report:",
      pdf: A10reportpdf,
      docx: null,
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'pdf':
      case 'slides pdf':
      case 'poster pdf':
      case 'pitch pdf':
      case 'HE pdf':
        return <FaFilePdf className="process-icon-pdf"/>;
      case 'slides pptx':
      case 'poster pptx':
      case 'pitch pptx':
        return <FaFilePowerpoint className="process-icon"/>;
      case 'youtube':
      case 'demo':
        return <FaYoutube className="process-icon"/>;
      case 'figma':
        return <FaFigma className="process-icon"/>;
      case 'hi-fi':
        return <FaMobile className="process-icon"/>;
      case 'save video':
        return <FaFileArrowDown className="process-icon"/>;
      case 'poster':
        return <FaFileImage className="process-icon"/>;
      case 'docx':
      case 'HE docx':
        return <FaFileWord className="process-icon"/>;
      case 'readme':
        return <FaFileLines className="process-icon"/>;
      case 'script':
      case 'poster':
        return <FaFileImage className="process-icon"/>;
      default:
        return <FaFile className="process-icon"/>;
    }
  };

  return (
    <div className="process-container">
      <div className="process-header">
        <h2 className="process-title">Our Process</h2>
        <p className="process-description">
          Over ten weeks, we searched for problems, brainstormed solutions, built and tested prototypes, and
          finally created the Turno app. Below is documentation of all our work.
        </p>
      </div>

      <div className="process-row">
        {items.map((item, index) => (
          <div key={index} className="process-column">
            <article className="process-box">
              <div className="process-box-title">
              </div>
              <div className="process-links-container">
                  <h3>{item.title}</h3>
                  <p className="process-links">
                    {Object.keys(item).slice(1).map((link, index2) => (
                      (link === "slides pptx" || link === "poster pptx" || link === "pitch pptx" || link === "docx" || link === "HE docx") && (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      ) || (link === "save video") && (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={ConceptVideo} 
                          alt={link} 
                          download
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      ) || (link !== "pptx" && link !== "docx" && link !== "save video") && (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                    )))}
                 
                    {/* {Object.keys(item).slice(2, 4).map((link, index2) => (
                      (link === "pptx" || link === "docx") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      )
                    ))}
                  </p>
                  <p className="process-links">
                    <div className="process-text">{item.subtitle2}</div>
                    {Object.keys(item).slice(5, 7).map((link, index2) => (
                      (link === "save") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={ConceptVideo} 
                          alt={link} 
                          download
                        >
                          {getIcon(link)}
                          <p className="process-icon-text">{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      )
                    ))}
                  </p>
                  <p className="process-links">
                    <div className="process-text">{item.subtitle3}</div>
                    {Object.keys(item).slice(8).map((link, index2) => (
                      (link === "save") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={ConceptVideo} 
                          alt={link} 
                          download
                        >
                          {getIcon(link)}
                          <p className="process-icon-text">{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      )
                    ))} */}
                  </p>
                </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProcess;
