import React, { useState } from "react";
import phoneIcon from "../assets/image/phone.svg";
import emailIcon from "../assets/image/email.svg";
import locationIcon from "../assets/image/address.svg";
import "./Contact.css";

const Contact = () => {
  const { theme } = useState("");

  return (
    <section id="contact" className="roaa">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h5>Contact</h5>
            <h1>
              Let’s Discuss Your <span>Project</span>
            </h1>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="icon-box">
                  <img src={phoneIcon} alt="phone" />
                </div>
                <div className="info-text">
                  <p>Call me</p>
                  <span>+963983398579</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <img src={emailIcon} alt="email" />
                </div>
                <div className="info-text">
                  <p>Email me</p>
                  <span>roaaswidany@gmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <img src={locationIcon} alt="address" />
                </div>
                <div className="info-text">
                  <p>Address</p>
                  <span>Daraa, Syria</span>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Your email" />
              </div>
              <input type="tel" placeholder="Phone number" />
              <textarea placeholder="Message" rows="5"></textarea>
              <button className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
