import React from "react";
import "../styles/About.css";
import iconLinkedIn from "../icons/linkedin.png";
import iconGitHub from "../icons/github-sign.png";
function About() {
  return (
    <div className="about-wrapper">
      <div>
        This is a small project meant to validate user selection choice data using a
        backend - Firebase.
      </div>
      <br></br>
      <div>
        While the functionality works as desired, I still need to
        make an effort in terms of page design. ^^
      </div>

      <br></br>
      <div className="contact-container">
        <img className="social-media-icon" src={iconLinkedIn} alt="linkedin" />
        <a href="https://www.linkedin.com/in/matei-daniel/">Daniel Matei</a>
      </div>
      <div className="contact-container">
        <img className="social-media-icon" src={iconGitHub} alt="linkedin" />
        <a href="https://www.linkedin.com/in/matei-daniel/">Daniel Matei</a>
      </div>
    </div>
  );
}

export default About;
