/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import phoneIcon from "../assets/image/phone.svg";
import emailIcon from "../assets/image/email.svg";
import locationIcon from "../assets/image/address.svg";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch("https://formspree.io/f/xqkrwjye", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Message sent successfully! I'll contact you soon.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="roaa">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h5>Contact</h5>
            <h1>
              Let's Discuss Your <span>Project</span>
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone number" 
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea 
                name="message"
                placeholder="Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button 
                type="submit" 
                className="send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;