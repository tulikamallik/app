
import React from "react";
import "./ReviewsSection.css";

const reviews = [
  {
    content: "Since listing my vacation home on Champions Club, my bookings have increased by 50%. The dashboard is easy to use, and the support is excellent.",
    name: "Esther Howard",
    role: "Traveler",
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/85522db0-882e-4352-91ac-3e77e633ba61.png"
  },
  {
    content: "Managing my boutique hotel has never been easier. Champions Club provides all the tools I need in one place.",
    name: "Jacob Jones",
    role: "Traveler",
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/844942cb-e959-4d19-85ee-85f75945a94a.png"
  },
  {
    content: "The exposure Champions Club gives is unmatched. My properties are now seen by customers worldwide.",
    name: "Joe Adam",
    role: "Traveler",
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/b6816818-7c83-4805-8072-0e6a41658339.png"
  }
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2 className="section-title">Customers Reviews</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-content">{review.content}</p>
            <div className="reviewer-info">
              <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
              <div>
                <h3 className="reviewer-name">{review.name}</h3>
                <p className="reviewer-role">{review.role}</p>
              </div>
            </div>
            <div className="rating">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/4b1406af-3f77-4e47-8770-940d1cf42d4a.png" alt="Rating" />
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button prev" aria-label="Previous review">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/21c2e997-a855-4036-8670-e5a2cb5db7b3.png" alt="Previous" />
        </button>
        <button className="nav-button next" aria-label="Next review">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/5d35d029-a65c-4448-827d-40ae51bd23d4.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}
