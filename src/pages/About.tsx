import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/SuchitraSwain.jpeg";
import { FaGithub, FaLinkedin, FaGlobeAsia } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Suchitra Swain</h1>
      <h2 className="profile-text">
        The creator of this awesome web application
      </h2>
      <h4 className="profile-text">
        This project is created for react and redux practice.
      </h4>
      <div className="profile-links">
        <a
          href="https://github.com/SuchitraSwain"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://suchitra-swain.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGlobeAsia />
        </a>
        <a
          href="https://www.linkedin.com/in/suchitra-swain-47562ab7/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
