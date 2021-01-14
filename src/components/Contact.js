import React, { useState } from "react";
import "../css/Contact.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${`monishmonib@gmail.com`}?subject=${`Contact From Website | ${email}`}&body=${name}: ${message}`
    );
  };
  return (
    <React.Fragment>
      <Element id="contact" name="contact">
        <div className="contact">
          <div className="contact__left">
            <p className="contact__header">CONNECT</p>
            <h1>
              Got a Idea?<br></br>Let's Talk
            </h1>
            <h2 className="about__accent email">
              <a href="mailto:monishmonib@gmail.com">{`monishmonib@gmail.com ->`}</a>
            </h2>
            <a href="https://www.github.com/bmonish" target="_blank">
              <FontAwesomeIcon
                className="contact__icons"
                icon={["fab", "github"]}
              />
            </a>
            <a href="https://www.linkedin.com/in/bmonish" target="_blank">
              <FontAwesomeIcon
                className="contact__icons"
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>
          <div className="contact__right">
            <p className="contact__header">
              ESTIMATE YOUR PROJECT?<br></br>Let me know here
            </p>
            <form name="contactForm">
              <h2>Whats your name?</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h2>Whats your email?</h2>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h2>Tell me about your project?</h2>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br></br>
              <button
                className="submit__button"
                onClick={handleClick}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
}

export default Contact;
