import React from "react";
import "../css/Contact.css";
import { Element } from "react-scroll";

function Contact() {
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
          </div>
          <div className="contact__right">
            <p className="contact__header">
              ESTIMATE YOUR PROJECT?<br></br>Let me know here
            </p>
            <form name="contactForm" netlify>
              <h2>Whats your name?</h2>
              <input type="text" name="name" />
              <h2>Whats your email?</h2>
              <input type="text" name="email" />
              <h2>Tell me about your project?</h2>
              <input type="text" name="project" />
              <br></br>
              <button className="submit__button" type="submit">
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
