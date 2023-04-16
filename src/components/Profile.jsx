import React from "react";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import me from "../assets/me.jpg";

export default function Profile() {
  return (
    <div className="wrapper">
      <img className="profile--image" src={me} alt="Joshua" />
      <div>
        <h4 className="full--name">Joshua Ofosu</h4>
        <p className="job--title">UI Engineer</p>
        <a
          className="web--link"
          href="https://behance.net/joeokat"
          rel="noreferrer"
          target="_blank"
        >
          be.joeokat.me
        </a>
      </div>

      <div className="cta-btn">
        <a className="email--btn" href="mailto:ofosujoshua73@yahoo.com">
          <img src={email} alt="" />
          Email
        </a>
        <a
          className="linkedin--btn"
          href="https://linkedin.com/in/joeokat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
