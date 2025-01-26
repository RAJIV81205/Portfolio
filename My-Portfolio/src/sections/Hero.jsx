import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);

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
      <h1>Hi, I'm Rajiv 👋</h1>
      <p ref={textRef}></p>
    </div>
  );
};

export default Hero;
