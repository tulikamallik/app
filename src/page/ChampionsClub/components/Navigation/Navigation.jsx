
import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="main-navigation">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#accommodation">Accommodation</a></li>
        <li><a href="#charter">Charter</a></li>
        <li><a href="#event">Event</a></li>
        <li><a href="#xperiences">Xperiences</a></li>
        <li><a href="#stories">Xperiences stories</a></li>
        <li><a href="#more">More+</a></li>
      </ul>
      <div className="search-bar">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/01f7a3eb-499c-4eea-9d06-4e5e0b852054.png" alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search..." aria-label="Search" />
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/bdf55bd0-af9e-4f74-a44e-7dad805c646a.png" alt="Filter" className="filter-icon" />
      </div>
    </nav>
  );
}
