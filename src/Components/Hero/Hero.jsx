import React from "react";
import profile from "../../assets/image/profile.jpg";
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
              <span>Frontend Developer</span>
            </h1>

            <p className="hero-subtext">
              Agency-quality Webflow websites with the personal touch of a
              freelancer.
            </p>

            <a href="/cv.pdf" download className="hero-cta">
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
