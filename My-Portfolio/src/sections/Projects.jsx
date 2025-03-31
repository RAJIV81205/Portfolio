import { project } from "../components/constant.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import TrueFocus from "../components/TrueFocus.jsx";

function Projects() {
  const projectCount = project.length;

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = project[selectedProjectIndex];

  return (
    <div className="project-sec" id="project" >
      <TrueFocus
        sentence="My Selected Work"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />

      <div className="project-container">
        <div className="project-details-container">
          <div
            className="project-logo animatedText"
            style={{
              border: `${currentProject.logoStyle.border}`,
            }}
          >
            <img src={currentProject.logo} alt="logo" />
          </div>

          <h2 className="animatedText">{currentProject.title}</h2>
          <p className="animatedText">{currentProject.desc}</p>
          <p className="animatedText">{currentProject.subdesc}</p>

          <div className="project-tags animatedText">
            <div className="tags">
              {currentProject.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <div className="live-site">
              <a href={currentProject.href}>
                <p>Check Live Site</p>
                <img src="assets/diagonal-arrow.png" alt="" />
              </a>
            </div>
          </div>

          <div className="arrow-container">
            <img
              src="assets/previous.png"
              alt=""
              onClick={() => handleNavigation("previous")}
            />
            <img
              src="assets/next.png"
              alt=""
              onClick={() => handleNavigation("next")}
            />
          </div>
        </div>
        <div className="video-container animatedText">
          <video src={currentProject.texture} autoPlay muted loop></video>
        </div>
      </div>
    </div>
  );
}

export default Projects;
