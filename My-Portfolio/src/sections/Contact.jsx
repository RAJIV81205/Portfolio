import TrueFocus from "../components/TrueFocus";


function Contact() {
  return (
    <div className="contact-sec" id="contact">
      <TrueFocus
        sentence="Contact Me"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
      
      
    </div>
  );
}

export default Contact;
