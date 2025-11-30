import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <footer className="footer">
        <div className="footer_content">
          <p className="footer_text">@ 2024. All Rights Reserved</p>
          <p>Develpoment by Roaa</p>
          <div className="footer_social">
            <a
              aria-label="Roaa's LinkedIn"
              className="footer_social_link linkedin"
              href="https://www.linkedin.com/in/%D8%B1%D8%A4%D9%89-%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D8%A7%D9%86%D9%8A-a6174533b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              aria-label="Roaa's GitHub"
              className="footer_social_link github"
              href="https://github.com/roaaalswidany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              aria-label="Roaa's Instagram"
              className="footer_social_link instagram"
              href="https://www.instagram.com/16ra24?igsh=MXh4c2trbmQxODdsbQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              aria-label="Roaa's Facebook"
              className="footer_social_link facebook"
              href="https://www.facebook.com/roaa.alswidany?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
