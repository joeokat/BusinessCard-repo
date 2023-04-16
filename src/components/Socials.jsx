import React from "react";
import twitter from "../assets/twitter.svg";
import figma from "../assets/figma.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

export default function Socials() {
  return (
    <div className="footer--container">
      <footer className="social--links">
        <a href="https://figma.com/@joeokat" target="_blank" rel="noreferrer">
          <img src={figma} alt="" />
        </a>
        <a
          href="https://instagram.com/joeokatgh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a href="https://twitter.com/joeokat" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" />
        </a>{" "}
        <a href="https://github.com/joeokat" target="_blank" rel="noreferrer">
          <img src={github} alt="" />
        </a>
      </footer>
    </div>
  );
}
