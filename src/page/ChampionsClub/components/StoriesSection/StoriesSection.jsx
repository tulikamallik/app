
import React from "react";
import "./StoriesSection.css";

const stories = [
  {
    name: "Esther Howard",
    content: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit....",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/61c27a58-1137-494a-aad6-215044ae30ed.png"
  },
  {
    name: "Joe Adam",
    content: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit....",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/c8834960-1600-4eaa-b51e-a7f1d4329614.png"
  }
];

export default function StoriesSection() {
  return (
    <section className="stories-section">
      <div className="stories-content">
        <h2 className="section-title">Experience Stories</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.image} alt={story.name} className="story-image" />
              <div className="story-info">
                <h3 className="story-name">{story.name}</h3>
                <p className="story-content">{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="stories-image">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/39051351-d319-43cf-9562-d3a51fe67dce.png" alt="Stories Background" className="background-image" />
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/58c16502-2632-46ae-8ff3-9b48d353fbf8.png" alt="Stories Foreground" className="foreground-image" />
      </div>
      <div className="navigation-buttons">
        <button className="nav-button prev" aria-label="Previous story">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/47947404-579e-436d-b485-60b358072969.png" alt="Previous" />
        </button>
        <button className="nav-button next" aria-label="Next story">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/1a3718c6-6871-4efa-aab3-92cdbc6cc8ae.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}
