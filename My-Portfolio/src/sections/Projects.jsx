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
    <div className="project-sec" id="project">
      <TrueFocus
        sentence="My Selected Work"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />

      <div className="project-container">
        {project.map((project, index) => (
          <div key={index} className="project-wrapper">
            {/* Left Side - Project Details */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                  src={project.spotlight}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="logo-container" style={project.logoStyle}>
                <img className="logo-img" src={project.logo} alt="logo" />
              </div>

              <div className="project-text">
                <p className="project-title animatedText">{project.title}</p>
                <p className="animatedText">{project.desc}</p>
                <p className="animatedText">{project.subdesc}</p>
              </div>

              <div className="project-tags">
                <div className="tags">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="tech-logo">
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>

                <a
                  className="live-site"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Check Live Site</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="arrow-img"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Project Video */}
            <div className="project-video">
              <video controls className="video-player">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
