import TrueFocus from "../components/TrueFocus";



function Contact() {

  

  return (
    <div className="contact-sec" id="contact" >
      <TrueFocus
        sentence="Contact Me"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />

      <div className="contact-container">
        <div className="social-icons">
          <div className="icon"><a href="https://github.com/RAJIV81205"><img src="assets/github.png" alt="" /></a></div>
          <div className="icon"><a href="https://github.com/RAJIV81205"><img src="assets/instagram.png" alt="" /></a></div>

        </div>
      </div>




      
    </div>
  );
}

export default Contact;
