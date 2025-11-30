import React from "react";
import profile from "../../assets/image/profile.jpg";
import cv from "../../assets/cv.pdf"
import "./Hero.css";

const Hero = () => {
  return (
    <section id="heroSection" className="roaa">
      <div className="hero-wave top" />
      <div className="hero-wave bottom" />

      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <p>
                HEY! <span>I’m Roaa,</span>
              </p>
              <span>Full-Stack Developer</span>
            </h1>

            <p className="hero-subtext">
              Where technical precision meets creative personal touch.
            </p>

            <a href={cv} download className="hero-cta">
              Download CV
            </a>
          </div>

          <div className="profile-frame">
            <img src={profile} alt="Roaa's Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
