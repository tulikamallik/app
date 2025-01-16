
import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Millions Of Experiences
        <br />
        one Simple Search
      </h1>
      <p className="hero-subtitle">
        Find what makes you happy anytime, anywhere
      </p>
      <form className="search-form">
        <div className="search-input">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/c7ebb7b2-0f51-46da-8a8e-f9c1ab7ec6b5.png" alt="Location" className="input-icon" />
          <input type="text" placeholder="Search a place or activity" aria-label="Where To?" />
        </div>
        <div className="search-input">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/ce0dfbcb-bf17-4f6d-af5e-bcecb7e53fa7.png" alt="Calendar" className="input-icon" />
          <input type="text" placeholder="Select dates" aria-label="When?" />
        </div>
        <button type="submit" className="search-button">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/7eba34f3-45cd-4092-8e6a-089871c54830.png" alt="Search" />
        </button>
      </form>
    </section>
  );
}
