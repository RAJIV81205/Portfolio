import Button from "../components/Button";
import SpotlightCard from "../components/SpotlightCard";
import TrueFocus from "../components/TrueFocus";

function About() {
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
          spotlightColor="rgba(204, 207, 207, 0.2)"
        >
          <img src="assets/grid1.png" alt="" />
          <h3>Hi, I’m Rajiv Dubey</h3>
          <p>
            With 12 years of experience, I have honed my skills in both frontend
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
          <Button text="Let's Connect" />
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card div4"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card div5"
          spotlightColor="rgba(204, 207, 207, 0.2)"
        ></SpotlightCard>
      </div>
    </div>
  );
}

export default About;
