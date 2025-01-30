import Button from "../components/Button";
import SpotlightCard from "../components/SpotlightCard";
import TrueFocus from "../components/TrueFocus";
import { useState } from "react";

function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" lucky81205@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <div className="about" id="about">
      <TrueFocus
        sentence="About Me"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
      <div className="parent">
        <SpotlightCard
          className="custom-spotlight-card div1"
          spotlightColor="rgba(149, 152, 152, 0.2)"
        >
          <img src="assets/grid1.png" alt="" />
          <h3>Hi, I’m Rajiv Dubey</h3>
          <p>
            With 3 years of experience, I have honed my skills in both frontend
            and backend dev, creating dynamic and responsive websites.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card div2"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        >
          <img src="assets/grid2.png" alt="" />
          <h3>Tech Stack</h3>
          <p>
            I specialize in a variety of languages, frameworks, and tools that
            allow me to build robust and scalable applications
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card div3"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        >
          <img src="assets/grid5.png" alt="" />
          <h3>I’m very flexible with time zone communications & locations</h3>
          <p>I&apos;m based in India and open to remote work worldwide.</p>
          <Button className="connect-btn" text="Let's Connect" />
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card div4"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        >
          <img src="assets/grid3.png" alt="" />
          <h3>My Passion for Coding</h3>
          <p>
            {" "}
            I love solving problems and building things through code.
            Programming isn&apos;t just my profession—it&apos;s my passion. I
            enjoy exploring new technologies, and enhancing my skills.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card div5"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        >
          <img src="assets/grid4.png" alt="" />

          <div className="copy-container" onClick={handleCopy}>
            <img
              src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
              alt="copy"
            />
            <p>lucky81205@gmail.com</p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default About;
