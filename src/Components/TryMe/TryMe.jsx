import React from "react";
import "./TryMe.css";

const TryMe = () => {
  return (
    <section className="tryme" id="roaa">
      <div className="tryme-container">
        <h2>Try me out, risk free!</h2>
        <p>
          If you're not happy with the design after the first draft, I'll refund
          your deposit, <strong>no questions asked</strong>.
        </p>
      </div>
      <div className="btn">
        <a href="/contact" className="tryme-btn">
          Contact →
        </a>
      </div>
    </section>
  );
};

export default TryMe;