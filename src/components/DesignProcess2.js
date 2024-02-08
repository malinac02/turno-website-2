import "./DesignProcess.css";
import {
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
  FaYoutube,
  FaFigma,
  FaFile,
  FaMobile,
  FaFileImage,
  FaFileArrowDown,
  FaFileLines,
} from "react-icons/fa6";
import Presentation1PDF from "../pdfs/194H/Presentation1.pdf";
import Presentation1PPTX from "../pdfs/194H/Presentation1.pptx";
import Presentation2PDF from "../pdfs/194H/Presentation2.pdf";
import Presentation2PPTX from "../pdfs/194H/Presentation2.pptx";
// import A1pdf from "../pdfs/147/TurnoA1Slides.pdf";
// import A1ppt from "../pdfs/147/TurnoA1Slides.pptx";
// import A2pdf from "../pdfs/147/TurnoA2Slides.pdf";
// import A2ppt from "../pdfs/147/TurnoA1Slides.pptx";
// import A4pdf from "../pdfs/147/TurnoA4Slides.pdf";
// import A4ppt from "../pdfs/147/TurnoA4Slides.pptx";
// import A5pdf from "../pdfs/147/TurnoA5Slides.pdf";
// import A5ppt from "../pdfs/147/TurnoA5Slides.pptx";
// import A6pdf from "../pdfs/147/TurnoA6Slides.pdf";
// import A6ppt from "../pdfs/147/TurnoA6Slides.pptx";
// import A6readme from "../pdfs/147/TurnoA6ReadMe.pdf";
// import A8pdf from "../pdfs/147/TurnoA8Slides.pdf";
// import A8ppt from "../pdfs/147/TurnoA8Slides.pptx";
// import A8readme from "../pdfs/147/TurnoA8ReadMe.pdf";
// import A10pitchpdf from "../pdfs/147/TurnoA10PitchSlide.pdf";
// import A10pitchppt from "../pdfs/147/TurnoA10PitchSlide.pptx";
// import A10posterpdf from "../pdfs/147/TurnoA10Poster.pdf";
// import A10posterppt from "../pdfs/147/TurnoA10Poster.pptx";
// import A10reportpdf from "../pdfs/147/TurnoA10Report.pdf";
// import A9HEpdf from "../pdfs/147/TurnoHE.pdf";
// import A9HEdocx from "../pdfs/147/TurnoHE.docx";
// import ConceptVideo from "../videos/TurnoConceptVideo.mp4";
// import TurnoDemo from "../videos/TurnoDemo.mp4";

function DesignProcess2() {
  const items = [
    {
      title: "Project Recap",
      "slides pdf": Presentation1PDF,
      "slides pptx": Presentation1PPTX,
    },
    {
      title: "Lab Usability Study",
      "slides pdf": Presentation2PDF,
      "slides pptx": Presentation2PPTX,
    },
    {
      title: "Hi-fi Prototype V2",
      // "slides pdf": A4pdf,
      // "slides pptx": A4ppt,
      // youtube: "https://youtu.be/UodGwjzAHGI?si=aYD30W_8lNBmDW0v",
      // "save video": ConceptVideo,
    },
    {
      title: "Field Usability Test",
      // "slides pdf": A5pdf,
      // "slides pptx": A5ppt,
    },
    {
      title: "Hi-Fi Prototype V3",
      // "slides pdf": A6pdf,
      // "slides pptx": A6ppt,
      // figma:
      //   "https://www.figma.com/file/RDkSKAbDRIfpmg8ZrJzkEM/A6-Turno-Med-Fi-Prototype?type=design&node-id=1-451&mode=design&t=aLDPeAQr758KHLLV-0",
      // readme: A6readme,
    },
    {
      title: "Hi-Fi Video Prototype",
      // "slides pdf": A8pdf,
      // "slides pptx": A8ppt,
      // "hi-fi": null,
      // readme: A8readme,
    },
    {
      title: "Final Project Poster, Presentation, & Report",
      // "HE pdf": A9HEpdf,
      // "HE docx": A9HEdocx,
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
      case "slides pdf":
      case "poster pdf":
      case "pitch pdf":
      case "HE pdf":
        return <FaFilePdf className="process-icon-pdf" />;
      case "slides pptx":
      case "poster pptx":
      case "pitch pptx":
        return <FaFilePowerpoint className="process-icon" />;
      case "youtube":
      case "demo":
        return <FaYoutube className="process-icon" />;
      case "figma":
        return <FaFigma className="process-icon" />;
      case "hi-fi":
        return <FaMobile className="process-icon" />;
      case "save video":
        return <FaFileArrowDown className="process-icon" />;
      case "poster":
        return <FaFileImage className="process-icon" />;
      case "docx":
      case "HE docx":
        return <FaFileWord className="process-icon" />;
      case "readme":
        return <FaFileLines className="process-icon" />;
      case "script":
      case "poster":
        return <FaFileImage className="process-icon" />;
      default:
        return <FaFile className="process-icon" />;
    }
  };

  return (
    <div className="process-container">
      <div className="process-header">
        <p className="process-description">
          CS 194H: Over the next ten weeks and with a new team, we iterated on
          the <b>turno</b> app, making key conceptual and design changes to
          arrive at our final product.
        </p>
      </div>

      <div className="process-row">
        {items.map((item, index) => (
          <div key={index} className="process-column">
            <article className="process-box">
              <div className="process-box-title"></div>
              <div className="process-links-container">
                <h3>{item.title}</h3>
                <p className="process-links">
                  {Object.keys(item)
                    .slice(1)
                    .map(
                      (link, index2) =>
                        ((link === "slides pptx" ||
                          link === "poster pptx" ||
                          link === "pitch pptx" ||
                          link === "docx" ||
                          link === "HE docx") && (
                          <a
                            key={index2}
                            className="process-icon-link"
                            href={item[link]}
                            alt={link}
                          >
                            {getIcon(link)}
                            <p>{link}</p>
                          </a>
                        )) ||
                        (link === "save video" && (
                          <a
                            key={index2}
                            className="process-icon-link"
                            // href={ConceptVideo}
                            alt={link}
                            download
                          >
                            {getIcon(link)}
                            <p>{link}</p>
                          </a>
                        )) ||
                        (link !== "pptx" &&
                          link !== "docx" &&
                          link !== "save video" && (
                            <a
                              key={index2}
                              className="process-icon-link"
                              href={item[link]}
                              alt={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {getIcon(link)}
                              <p>{link}</p>
                            </a>
                          ))
                    )}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProcess2;
