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
    <div className="project-sec">
      <TrueFocus
        sentence="My Selected Work"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}

export default Projects;
