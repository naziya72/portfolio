import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_psdlcd2",
        "template_gyexnij",
        e.target,
        "Qvu9WGXV5-7i7qOpO"
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          console.log(result.text);
        },
        (error) => {
          setIsSending(false);
          console.log(error.text);
        }
      );

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
          {isSent && <p>Message sent successfully!</p>}
        </form>
      </div>
      <div className="social-icons">
        <h3>Get In Touch</h3>
        <a
          href="https://github.com/naziya7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>GitHub
        </a>
        <a
          href="https://linkedin.com/in/naziya-patel-106903241"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>LinkedIn
        </a>
        <a href="mailto:naaziyapatel36@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          >
      
          <i className="far fa-envelope"></i>Email
        </a>
        <a
          href="https://instagram.com/naziyapatel77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
