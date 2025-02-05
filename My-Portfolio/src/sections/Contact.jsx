import TrueFocus from "../components/TrueFocus";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };

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

      <div className="contact-container">
        <p>Feel free to reach out for any inquiries or collaborations.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
          {success && <p className="success">{success}</p>}
        </form>
      </div>

      <div className="social-buttons">
        <a href="https://github.com/RAJIV81205" target="_blank" rel="noopener noreferrer" className="social-btn github">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          Follow me on GitHub
        </a>
        <a href="https://www.linkedin.com/in/rajiv-dubey-/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          Connect on LinkedIn
        </a>
        <a href="https://www.https://instagram.com/ra.j.iv_" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="Instagram" />
          Follow me on Instagram
        </a>
      </div>

    </div>
  );
}

export default Contact;
