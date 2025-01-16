
import React from "react";
import "./ExperiencesSection.css";

const experiences = [
  { title: "Yacht", image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/0dde2de7-267b-4a4d-806e-25a595c9315a.png" },
  { title: "Activities", image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/468cdadd-97b3-4b9b-8f2a-dca2b3078c6b.png" },
  { title: "Air Charter", image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/adc38545-917e-4598-aa12-3142b8490882.png" },
  { title: "Villa", image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/45825e1c-821b-4e4f-a3be-4b2070b0a55d.png" }
];

export default function ExperiencesSection() {
  return (
    <section className="experiences-section">
      <h2 className="section-title">Experiences that inspire</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="experiences-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card" style={{backgroundImage: `url(${experience.image})`}}>
            <h3 className="experience-title">{experience.title}</h3>
            <div className="rating">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/77d025f0-5831-47ae-b655-97849cfa651f.png" alt="Rating" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
