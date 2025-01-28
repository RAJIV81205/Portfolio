import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Squares from "../components/Squares";
import SplitText from "../components/Split";

import GradientText from "../components/GradientText";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const messages = [
    "Turning ideas into impactful web apps.",
    "Crafting innovative and user-friendly solutions.",
    "Passionate developer exploring creativity through code.",
    "Building efficient, scalable applications.",
    "Dream big, build bigger with code.",
  ];

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    messages.forEach((message, index) => {
      // Type the message
      tl.to(textRef.current, {
        duration: 3,
        text: message,
        ease: "none",
      })

        // Pause after typing
        .to({}, { duration: 1 })

        // Delete the message character by character
        .to(textRef.current, {
          delay: 1,
          duration: 2,
          text: "",
          ease: "none",
          onUpdate: function () {
            const progress = this.progress();
            const currentText = message.slice(
              0,
              Math.floor((1 - progress) * message.length)
            );
            if (textRef.current) {
              textRef.current.textContent = currentText;
            }
          },
        });

      // Pause between messages (except after the last one)
      if (index !== messages.length - 1) {
        tl.to({}, { duration: 0.5 });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="hero">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="up"
        borderColor="#fff"
        hoverFillColor="#fff"
      />
      <h1>
        <SplitText
          text="Hi, I'm Rajiv"
          className="split-text"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>

      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={8}
        showBorder={false}
      >
        <p  className="mess" ref={textRef}></p>
      </GradientText>
      
    </div>
  );
};

export default Hero;
