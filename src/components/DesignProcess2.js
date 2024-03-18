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
  FaMobileScreenButton,
} from "react-icons/fa6";
import ProjectRecap from "../pdfs/194H/Presentation1.pdf";
import LabUsabilityStudy from "../pdfs/194H/Presentation2.pdf";
import PrototypeV2 from "../pdfs/194H/Presentation3.pdf";
import ReadMeV2 from "../pdfs/194H/ReadMeV2.pdf";
import FieldUsabilityTest from "../pdfs/194H/Presentation4.pdf";
import PrototypeV3 from "../pdfs/194H/Presentation5.pdf";
import ReadMeV3 from "../pdfs/194H/ReadMeV3.pdf";
import PrototypeVideo from "../videos/TurnoPrototypeVideo.mp4";
import FinalPresentation from "../pdfs/194H/Presentation6.pdf";
import FinalReport from "../pdfs/194H/FinalReport.pdf";
import PosterPDF from "../pdfs/194H/Poster.pdf";

function DesignProcess2() {
  const items = [
    {
      title: "Project Recap",
      "slides (pdf)": ProjectRecap,
      "slides (canva)":
        "https://www.canva.com/design/DAF50YR54UE/Y7szi_pW5wcZJhIGgCNo8w/view?utm_content=DAF50YR54UE&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
    },
    {
      title: "Lab Usability Study",
      "slides (pdf)": LabUsabilityStudy,
      "slides (canva)":
        "https://www.canva.com/design/DAF7BGPUGkk/hCZ_kEoBV-ZWS7oEuejaRA/view?utm_content=DAF7BGPUGkk&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
    },
    {
      title: "Hi-fi Prototype V2",
      "slides (pdf)": PrototypeV2,
      "slides (canva)":
        "https://www.canva.com/design/DAF8Uk8S7eM/rRFVV-sJCqn00GZspF1cGw/view?utm_content=DAF8Uk8S7eM&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
      "readme + prototype": ReadMeV2,
    },
    {
      title: "Field Usability Test",
      "slides (pdf)": FieldUsabilityTest,
      "slides (canva)":
        "https://www.canva.com/design/DAF9Yozh5hU/9aw0qMQmJsTdclFS8zWzUA/view?utm_content=DAF9Yozh5hU&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
    },
    {
      title: "Hi-Fi Prototype V3 (Final)",
      "slides (pdf)": PrototypeV3,
      "slides (canva)":
        "https://www.canva.com/design/DAF-mF1pYeQ/NomnEmUsY4MziwatMNh-Vg/view?utm_content=DAF-mF1pYeQ&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      "readme + prototype": ReadMeV3,
    },
    {
      title: "Hi-Fi Video Prototype",
      youtube: "https://youtu.be/WP6tEXwbzp8",
      "save video": PrototypeVideo,
    },
    {
      title: "Final Poster & Presentation",
      "poster (pdf)": PosterPDF,
      "slides (pdf)": FinalPresentation,
      "slides (canva)":
        "https://www.canva.com/design/DAF_IzC6fGg/oL9Eng8sBaLFP3Q67hprCQ/view?utm_content=DAF_IzC6fGg&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
    },
    {
      title: "Final Report",
      "report (pdf)": FinalReport,
      "report (canva)": "https://www.canva.com/design/DAF8jtTx6fE/d3QDQ08gmZ0vdkhOP5JQeg/view?utm_content=DAF8jtTx6fE&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
      case "report (pdf)":
      case "slides (pdf)":
      case "poster (pdf)":
      case "pitch (pdf)":
      case "HE (pdf)":
        return <FaFilePdf className="process-icon-pdf" />;
      case "slides (pptx)":
      case "poster (pptx)":
      case "pitch (pptx)":
      case "slides (canva)":
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
      case "report (canva)":
      case "HE (docx)":
        return <FaFileWord className="process-icon" />;
      case "readme + prototype":
        return <FaMobileScreenButton className="process-icon" />;
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
          the turno app, making key conceptual and design changes to
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
                        ((link === "slides (pptx)" ||
                          link === "poster (pptx)" ||
                          link === "pitch (pptx)" ||
                          link === "docx" ||
                          link === "HE (docx)") && (
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
                            href={PrototypeVideo}
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
